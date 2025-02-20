import { IsNotEmpty, IsString } from 'class-validator';
import { UserSignInDTO } from './user-signin.dto';

export class UserSignUpDTO extends UserSignInDTO {
  @IsString()
  @IsNotEmpty()
  role: string;
}
