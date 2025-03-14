import { TransitionType } from 'src/enums/vehicle.enums';
import type { VehicleDetails } from 'src/interface/vehicle.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehicle')
export class Vehicle implements VehicleDetails {
  @PrimaryGeneratedColumn('uuid', { name: 'vehicle_id' })
  id: string;

  @Column({ name: 'username', type: 'varchar', nullable: false })
  username: string;

  @Column({ name: 'manuf_year', type: 'varchar', nullable: false })
  vehicle_manufacturer_year: string;

  @Column({ name: 'brand', type: 'varchar', nullable: false })
  brand: string;

  @Column({
    name: 'trans_type',
    type: 'enum',
    enum: TransitionType,
    nullable: false,
  })
  transitionType: TransitionType;

  @Column({
    name: 'AirConditioning',
    type: 'tinyint',
    transformer: {
      to: (value: boolean) => (value ? 1 : 0),
      from: (value: number) => Boolean(value),
    },
  })
  isAirConditioning: boolean;

  @Column({ name: 'seats', type: 'int', nullable: false })
  seat_count: number;

  @Column({ name: 'specs', type: 'varchar', nullable: true })
  specification: string;
}
