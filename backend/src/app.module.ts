import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigurationModule } from './config/configuration/configuration.module';
import { TypeOrmConfigModule } from './config/type-orm-config/type-orm-config.module';

@Module({
  imports: [UserModule, ConfigurationModule, TypeOrmConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
