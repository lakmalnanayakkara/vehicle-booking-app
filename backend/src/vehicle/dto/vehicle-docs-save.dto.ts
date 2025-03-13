import { IsString, IsNotEmpty } from 'class-validator';
import { VehicleDocumentsDetails } from 'src/interface/vehicle.interface';

export class VehicleDocsSaveDTO implements VehicleDocumentsDetails {
  @IsString()
  @IsNotEmpty()
  driving_license_photo_front: string;

  @IsString()
  @IsNotEmpty()
  driving_license_photo_back: string;

  @IsString()
  @IsNotEmpty()
  vehicle_renewing_license_photo: string;

  @IsString()
  @IsNotEmpty()
  Vehicle_insurance_photo: string;

  @IsString()
  @IsNotEmpty()
  vehicle_book_copy: string;

  @IsString()
  @IsNotEmpty()
  vehicle_photo: string;
}
