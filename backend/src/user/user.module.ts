import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Vehicle } from 'src/vehicle/entity/vehicle.entity';
import { VehicleModule } from 'src/vehicle/vehicle.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Vehicle]), AuthModule, VehicleModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
