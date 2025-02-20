import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule } from '../config/configuration.module';
import { ConfigurationService } from '../config/configuration.service';
import * as mysql from 'mysql2/promise';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigurationService],
      useFactory: async (configService: ConfigurationService): Promise<any> => {
        const type = configService.getDbConfig().type;
        const host = configService.getDbConfig().host;
        const port = configService.getDbConfig().port;
        const database = configService.getDbConfig().name;
        const user = configService.getDbConfig().username;
        const password = configService.getDbConfig().password;

        const connection = await mysql.createConnection({
          host,
          port,
          user,
          password,
        });

        await connection.query(
          `CREATE DATABASE IF NOT EXISTS \`${database}\`;`,
        );
        await connection.end();

        return {
          type,
          host,
          port,
          user,
          password,
          database,
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class TypeOrmConfigModule {}
