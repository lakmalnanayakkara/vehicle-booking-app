import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSignUpDTO } from './dto/user-signup.dto';
import { UserSignInDTO } from './dto/user-signin.dto';
import { User } from './entity/user.entity';

@Controller('api/v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/sign-up')
  userSigUp(@Body() userSignUpDTO: UserSignUpDTO): Promise<User> {
    return this.userService.userSigUp(userSignUpDTO);
  }

  @Post('/sign-in')
  userSignIn(@Body() userSignInDTO: UserSignInDTO) {
    console.log(userSignInDTO);
  }

  @Post('/log-out')
  userLogOut() {}

  @Post('/refresh-token')
  userRefreshToken() {}
}
