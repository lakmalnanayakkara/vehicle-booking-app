import { TransitionType } from './enums/common.enum';

export interface VehicleSaveDetails {
  username: string;
  vehicle_manufacturer_year: Date;
  brand: string;
  transitionType: TransitionType;
  isAirConditioning: boolean;
  seat_count: number;
  specification: string;
  driving_license_photo_front: File;
  driving_license_photo_back: File;
  vehicle_renewing_license_photo: File;
  Vehicle_insurance_photo: File;
  vehicle_book_copy: File;
  vehicle_photo: File;
}
