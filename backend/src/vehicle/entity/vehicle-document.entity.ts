import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { VehicleDocumentsDetails } from './../../interface/vehicle.interface';

@Entity('Vehicle_Docs')
export class VehicleDocs implements VehicleDocumentsDetails {
  @PrimaryGeneratedColumn('uuid', { name: 'vehicle_doc_id' })
  id: string;

  @Column({ name: 'driving_license_front', type: 'varchar', nullable: false })
  driving_license_photo_front: string;

  @Column({ name: 'driving_license_back', type: 'varchar', nullable: false })
  driving_license_photo_back: string;

  @Column({ name: 'renewing_license', type: 'varchar', nullable: false })
  vehicle_renewing_license_photo: string;

  @Column({ name: 'vehicle_insurance', type: 'varchar', nullable: false })
  Vehicle_insurance_photo: string;

  @Column({ name: 'vehicle_book', type: 'varchar', nullable: false })
  vehicle_book_copy: string;

  @Column({ name: 'vehicle_photo', type: 'varchar', nullable: false })
  vehicle_photo: string;
}
