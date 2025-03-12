import type { UserRoles } from 'src/enums/roles.enum';

export interface UserSignInDetails {
  username: string;
  password: string;
}
export interface UserSignUpDetails extends UserSignInDetails {
  name: string;
  address: string;
  nicNumber: string;
  phoneNumber: string;
  email: string;
  role: UserRoles;
  isActive: boolean;
}
