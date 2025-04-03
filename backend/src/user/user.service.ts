import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserSignUpDTO } from './dto/user-signup.dto';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { AuthService } from './../auth/auth.service';
import type { UserSignInDTO } from './dto/user-signin.dto';
//import { UserProfileDetailsDTO} from './dto/user-profile-details.dto';
import { VehicleService } from 'src/vehicle/vehicle.service';

@Injectable()
export class UserService {

 
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private authService: AuthService,  
    private vehicleService: VehicleService,

  ) {}

 

  public async userSignUp(userSignUpDTO: UserSignUpDTO): Promise<any> {
    const {
      name,
      address,
      nicNumber,
      phoneNumber,
      email,
      username,
      password,
      role,
    } = userSignUpDTO;
    const existingUser = await this.userRepo.findOne({ where: { username } });
    if (existingUser) {
      throw new ConflictException('Username already exists', {
        cause: new Error(),
        description: 'Username already exists',
      });
    } else {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);
      const user = this.userRepo.create({
        name,
        address,
        nicNumber,
        phoneNumber,
        email,
        username,
        password: hashPassword,
        role,
        isActive: true,
      });

      await this.userRepo.save(user);
      const access_token = this.authService.generateToken(user);

      return { username: user.username, role: user.role, access_token };
    }
  }

  public async userSignIn(userSignInDTO: UserSignInDTO): Promise<any> {
    const { username } = userSignInDTO;
    const existingUser = await this.userRepo.findOne({ where: { username } });
    if (!existingUser) {
      throw new UnauthorizedException('Unauthorized access', {
        cause: new Error(),
        description: "Username doesn't exist.",
      });
    } else {
      const access_token = this.authService.generateToken(existingUser);
      return {
        username: existingUser.username,
        role: existingUser.role,
        access_token,
      };
    }
  }
  

  public async getUserProfileByUsername(username: string): Promise<any> {
    const user = await this.userRepo.findOne({
      where:{username},
    });
    console.log("USER",user);
    
    if(!user){
      throw new Error('User not found');
    }

    const userProfile:User = {
      name: user.name,
      address: user.address,
      nicNumber: user.nicNumber,
      phoneNumber: user.phoneNumber,
      email: user.email,
      isActive: user.isActive,
      username: user.username,
      role: user.role,
      id: '',
      password: '',
    };

  const vehicle = await this.vehicleService.getVehiclesByUserName(username);
  console.log("Vehicle",vehicle);
  
  return userProfile;

}

}
