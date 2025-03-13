import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './entity/vehicle.entity';
import { VehicleDocs } from './entity/vehicle-document.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, VehicleDocs])],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
