import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRoles } from 'src/enums/roles.enum';
import { UserSignUpDetails } from 'src/interface/user.interface';

export class UserSignUpDTO implements UserSignUpDetails {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  @IsNotEmpty()
  dateOfBirth: Date;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  nicNumber: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  isActive: boolean;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(UserRoles)
  @IsNotEmpty()
  role: UserRoles;
}
