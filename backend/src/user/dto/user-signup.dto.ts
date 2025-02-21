import { IsNotEmpty, IsString } from 'class-validator';
import { UserSignInDTO } from './user-signin.dto';
import type { UserRoles } from 'src/enums/roles.enum';

export class UserSignUpDTO extends UserSignInDTO {
  @IsString()
  @IsNotEmpty()
  role: UserRoles;
}
