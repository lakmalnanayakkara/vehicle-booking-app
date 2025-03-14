import { UserRoles } from './enums/common.enum';

export interface UserSignIn {
  username: string;
  password: string;
}

export interface UserSignUp extends UserSignIn {
  name: string;
  address: string;
  nicNumber: string;
  phoneNumber: string;
  email: string;
  role: UserRoles;
}
