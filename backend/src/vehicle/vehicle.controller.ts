import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import type { StandardResponse } from 'src/shared/dto/standard-response.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import type { VehicleDetailsDTO } from './dto/vehicle-save.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import type { VehicleDocuments } from 'src/interface/vehicle.interface';

@Controller('api/v1/vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Post('/save-vehicle')
  @Public(true)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'driving_license_photo_front', maxCount: 1 },
      { name: 'driving_license_photo_back', maxCount: 1 },
      { name: 'vehicle_renewing_license_photo', maxCount: 1 },
      { name: 'vehicle_insurance_photo', maxCount: 1 },
      { name: 'vehicle_book_copy', maxCount: 1 },
      { name: 'vehicle_photo', maxCount: 1 },
    ]),
  )
  async saveVehicles(
    @Body() vehicleDetailsDTO: VehicleDetailsDTO,
    @UploadedFiles() files: VehicleDocuments,
  ): Promise<StandardResponse> {
    const vehicle = await this.vehicleService.saveVehicle(
      vehicleDetailsDTO,
      files,
    );
    const response: StandardResponse = {
      code: 200,
      message: 'SUCCESSFUL',
      data: vehicle,
    };
    return response;
  }
}
