import { Controller, Get } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import type { StandardResponse } from 'src/shared/dto/standard-response.dto';
import { data } from 'src/shared/common/data';

@Controller('api/v1/vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Get('/get-all-vehicles')
  saveVehicles(): StandardResponse {
    const response: StandardResponse = {
      code: 200,
      message: 'SUCCESSFUL',
      data: data,
    };
    return response;
  }
}
