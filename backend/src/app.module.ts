import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigurationModule } from './configurations/config/configuration.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigModule } from './configurations/typeorm/type-orm.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
//import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesAuthGuard } from './auth/guards/roles.guard';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    ConfigurationModule,
    TypeOrmConfigModule,
    AuthModule,
    VehicleModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesAuthGuard,
    },
  ],
})
export class AppModule {}
