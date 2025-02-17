import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as mysql from 'mysql2/promise';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<any> => {
        const type = configService.get<string>('DB_TYPE');
        const host = configService.get<string>('DB_HOST');
        const port = configService.get<number>('DB_PORT');
        const username = configService.get<string>('DB_USERNAME');
        const password = configService.get<string>('DB_PASSWORD');
        const database = configService.get<string>('DB_NAME');

        const connection = await mysql.createConnection({
          host,
          port,
          user: username,
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
          username,
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
