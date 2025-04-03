import { UserRoles } from "src/enums/roles.enum";
import {  UserSignUpDetails } from "src/interface/user.interface";
import {  FullVehicleDetails } from "src/interface/vehicle.interface";

export class UserProfileDetailsDTO implements UserSignUpDetails{
    name: string;
    address: string;
    nicNumber: string;
    phoneNumber: string;
    email: string;
    role: UserRoles;
    isActive: boolean;
    username: string;
    password: string;
    vehicles? : FullVehicleDetails[];
  }
  