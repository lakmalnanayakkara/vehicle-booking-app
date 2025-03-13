import type { TransitionType } from 'src/enums/vehicle.enums';

export interface VehicleDocumentsDetails {
  driving_license_photo_front: string;
  driving_license_photo_back: string;
  vehicle_renewing_license_photo: string;
  Vehicle_insurance_photo: string;
  vehicle_book_copy: string;
  vehicle_photo: string;
}

export interface VehicleDetails {
  username: string;
  vehicle_manufacturer_year: Date;
  brand: string;
  transitionType: TransitionType;
  isAirConditioning: boolean;
  seat_count: number;
  specification: string;
}
