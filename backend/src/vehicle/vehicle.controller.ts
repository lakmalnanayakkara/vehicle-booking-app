import { Controller, Get } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import type { StandardResponse } from 'src/shared/dto/standard-response.dto';
import { data } from 'src/shared/common/data';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('api/v1/vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Get('/get-all-vehicles')
  @Public(true)
  saveVehicles(): StandardResponse {
    const response: StandardResponse = {
      code: 200,
      message: 'SUCCESSFUL',
      data: data,
    };
    return response;
  }
}
