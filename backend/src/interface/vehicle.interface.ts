import type { TransitionType } from 'src/enums/vehicle.enums';
export interface VehicleDocuments {
  driving_license_photo_front?: Express.Multer.File[];
  driving_license_photo_back?: Express.Multer.File[];
  vehicle_renewing_license_photo?: Express.Multer.File[];
  Vehicle_insurance_photo?: Express.Multer.File[];
  vehicle_book_copy?: Express.Multer.File[];
  vehicle_photo?: Express.Multer.File[];
}

export interface VehicleDetails {
  username: string;
  vehicle_manufacturer_year: string;
  brand: string;
  transitionType: TransitionType;
  isAirConditioning: boolean;
  seat_count: number;
  specification: string;
}

export interface VehicleDocumentDetails {
  name: string;
  path: string;
  last_modified: Date;
}
