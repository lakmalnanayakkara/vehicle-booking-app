import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSignUpDTO } from './dto/user-signup.dto';
import { UserSignInDTO } from './dto/user-signin.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import type { StandardResponse } from '../shared/dto/standard-response.dto';
import { RolesAuthGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { UserRoles } from 'src/enums/roles.enum';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('api/v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/sign-up')
  @Public(true)
  async userSigUp(
    @Body() userSignUpDTO: UserSignUpDTO,
  ): Promise<StandardResponse> {
    const data = await this.userService.userSignUp(userSignUpDTO);
    const response: StandardResponse = {
      code: 200,
      message: 'SUCCESSFUL',
      data: data,
    };
    return response;
  }

  @Post('/sign-in')
  @Public(true)
  async userSignIn(
    @Body() userSignInDTO: UserSignInDTO,
  ): Promise<StandardResponse> {
    const data = await this.userService.userSignIn(userSignInDTO);
    const response: StandardResponse = {
      code: 200,
      message: 'SUCCESSFUL',
      data: data,
    };
    return response;
  }

  @Post('/refresh-token')
  userRefreshToken() {}

  //test karanna ghpu ekk
  @Get('/driver')
  @Roles(UserRoles.PASSENGER)
  @UseGuards(JwtAuthGuard, RolesAuthGuard)
  protectedRoute() {
    return { message: 'This is a protected route' };
  }
}
