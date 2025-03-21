import type { VehicleDocumentDetails } from 'src/interface/vehicle.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Vehicle_Docs')
export class VehicleDocs implements VehicleDocumentDetails {
  @PrimaryGeneratedColumn('uuid', { name: 'vehicle_doc_id' })
  id: number;

  @Column({ name: 'vehicle_id', type: 'varchar', nullable: false })
  vehicle_id: string;

  @Column({ name: 'driving_license_front', type: 'varchar', nullable: false })
  name: string;

  @Column({ name: 'driving_license_back', type: 'varchar', nullable: false })
  path: string;

  @Column({ name: 'renewing_license', type: 'varchar', nullable: false })
  last_modified: Date;
}
