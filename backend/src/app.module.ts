import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigurationModule } from './configurations/config/configuration.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigModule } from './configurations/typeorm/type-orm.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    ConfigurationModule,
    TypeOrmConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
