import { TransitionType } from 'src/enums/vehicle.enums';
import type {
  VehicleDetails,
  VehicleDocumentsDetails,
} from 'src/interface/vehicle.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehicle')
export class Vehicle implements VehicleDetails, VehicleDocumentsDetails {
  @PrimaryGeneratedColumn('uuid', { name: 'vehicle_id' })
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

  @Column({ name: 'username', type: 'varchar', nullable: false })
  username: string;

  @Column({ name: 'vehicle_photo', type: 'varchar', nullable: false })
  vehicle_photo: string;

  @Column({ name: 'manuf_year', type: 'date', nullable: false })
  vehicle_manufacturer_year: Date;

  @Column({ name: 'brand', type: 'varchar', nullable: false })
  brand: string;

  @Column({
    name: 'trans_type',
    type: 'enum',
    enum: TransitionType,
    nullable: false,
  })
  transitionType: TransitionType;

  @Column({ name: 'AirConditioning', type: 'boolean', nullable: false })
  isAirConditioning: boolean;

  @Column({ name: 'seats', type: 'int', nullable: false })
  seat_count: number;

  @Column({ name: 'specs', type: 'varchar', nullable: false })
  specification: string;
}
