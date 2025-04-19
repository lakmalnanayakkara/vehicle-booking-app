import { Transform } from 'class-transformer';
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
  vehicle_manufacturer_year: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsEnum(TransitionType)
  @IsNotEmpty()
  transitionType: TransitionType;

  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  @IsBoolean()
  @IsNotEmpty()
  isAirConditioning: boolean;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  seat_count: number;

  @IsString()
  specification: string;
}

