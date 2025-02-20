import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigurationModule } from './configurations/config/configuration.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigModule } from './configurations/typeorm/type-orm.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    ConfigurationModule,
    TypeOrmConfigModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
