import { ConflictException, Injectable } from '@nestjs/common';
import { UserSignUpDTO } from './dto/user-signup.dto';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import type { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  public async userSigUp(userSignUpDTO: UserSignUpDTO): Promise<User> {
    const { username, password, role } = userSignUpDTO;
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
        username,
        password: hashPassword,
        role,
        isActive: true,
      });

      return await this.userRepo.save(user);
    }
  }
}
