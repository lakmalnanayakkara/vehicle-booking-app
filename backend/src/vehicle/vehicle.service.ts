import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entity/vehicle.entity';
import { VehicleDocs } from './entity/vehicle-document.entity';
import { VehicleDetailsDTO } from './dto/vehicle-save.dto';
import {
  VehicleDocuments,
  type VehicleDocumentDetails,
} from 'src/interface/vehicle.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle) private vehicleRepo: Repository<Vehicle>,
    @InjectRepository(VehicleDocs)
    private vehicleDocsRepo: Repository<VehicleDocs>,
  ) {}

  public async saveVehicle(
    vehicleDetailsDTO: VehicleDetailsDTO,
    files: VehicleDocuments,
  ) {
    const {
      username,
      vehicle_manufacturer_year,
      brand,
      transitionType,
      isAirConditioning,
      seat_count,
      specification,
    } = vehicleDetailsDTO;

    const vehicle = this.vehicleRepo.create({
      username,
      vehicle_manufacturer_year,
      brand,
      transitionType,
      isAirConditioning,
      seat_count,
      specification,
    });

    const savedVehicle = await this.vehicleRepo.save(vehicle);

    const vehicleFolder = `../storage/${savedVehicle.id}`;
    await fs.promises.mkdir(vehicleFolder, { recursive: true });

    const documents: VehicleDocumentDetails[] = [];

    for (const [fieldName, fileArray] of Object.entries(files)) {
      if (fileArray?.length) {
        const file = fileArray[0];
        const originalExtension = path.extname(file.originalname);
        const newFileName = `${vehicle.id}_${fieldName}${originalExtension}`;
        const filePath = `${vehicleFolder}/${newFileName}`;

        await fs.promises.writeFile(filePath, file.buffer);

        const vehicleDet = this.vehicleDocsRepo.create({
          vehicle_id: savedVehicle.id,
          name: newFileName,
          path: filePath,
          last_modified: new Date(),
        });

        documents.push(vehicleDet);
      }
    }

    if (documents.length > 0) {
      await this.vehicleDocsRepo.save(documents);
    }
    return savedVehicle;
  }
}
