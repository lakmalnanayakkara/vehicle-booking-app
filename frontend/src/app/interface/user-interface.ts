import { UserRoles } from './enums/common.enum';

export interface UserSignIn {
  username: string;
  password: string;
}

export interface UserSignUp extends UserSignIn {
  role: UserRoles;
}
