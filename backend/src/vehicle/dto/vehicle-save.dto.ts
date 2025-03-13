import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsBoolean,
  IsNumber,
  IsEnum,
} from 'class-validator';
import { TransitionType } from 'src/enums/vehicle.enums';
import { VehicleDetails } from 'src/interface/vehicle.interface';

export class VehicleDetailsDTO implements VehicleDetails {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsDate()
  @IsNotEmpty()
  vehicle_manufacturer_year: Date;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsEnum(TransitionType)
  @IsNotEmpty()
  transitionType: TransitionType;

  @IsBoolean()
  @IsNotEmpty()
  isAirConditioning: boolean;

  @IsNumber()
  @IsNotEmpty()
  seat_count: number;

  @IsString()
  @IsNotEmpty()
  specification: string;
}
