import type { VehicleDocumentDetails } from 'src/interface/vehicle.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Vehicle_Docs')
export class VehicleDocs implements VehicleDocumentDetails {
  @PrimaryGeneratedColumn('uuid', { name: 'vehicle_doc_id' })
  id: number;

  @Column({ name: 'vehicle_id', type: 'varchar', nullable: false })
  vehicle_id: string;

  @Column({ name: 'file_name', type: 'varchar', nullable: false })
  name: string;

  @Column({ name: 'file_path', type: 'varchar', nullable: false })
  path: string;

  @Column({ name: 'last_modified', type: 'varchar', nullable: false })
  last_modified: Date;
}
