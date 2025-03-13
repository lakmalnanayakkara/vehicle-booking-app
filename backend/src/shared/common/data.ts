import { TransitionType } from 'src/enums/vehicle.enums';
import type { VehicleDetails } from 'src/interface/vehicle.interface';

export const data: VehicleDetails[] = [
  {
    username: 'user1',
    vehicle_manufacturer_year: new Date(),
    brand: 'brand1',
    transitionType: TransitionType.AUTO,
    isAirConditioning: false,
    seat_count: 5,
    specification: '',
  },
  {
    username: 'user2',
    vehicle_manufacturer_year: new Date(),
    brand: 'brand2',
    transitionType: TransitionType.AUTO,
    isAirConditioning: false,
    seat_count: 5,
    specification: '',
  },
  {
    username: 'user3',
    vehicle_manufacturer_year: new Date(),
    brand: 'brand3',
    transitionType: TransitionType.AUTO,
    isAirConditioning: false,
    seat_count: 5,
    specification: '',
  },
];
