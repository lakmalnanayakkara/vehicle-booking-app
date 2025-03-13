import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entity/vehicle.entity';
import { VehicleDocs } from './entity/vehicle-document.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle) private vehicleRepo: Repository<Vehicle>,
    @InjectRepository(VehicleDocs)
    private vehicleDocsRepo: Repository<VehicleDocs>,
  ) {}

  saveVehicles() {
    throw new Error('Method not implemented.');
  }
}
