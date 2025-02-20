import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface DatabaseConfig {
  type: string;
  host: string;
  port: number;
  name: string;
  username: string;
  password: string;
}

@Injectable()
export class ConfigurationService {
  private databaseConfig: DatabaseConfig;

  constructor(private readonly configService: ConfigService) {
    this.databaseConfig = {
      type: configService.get<string>('DB_TYPE')!,
      host: configService.get<string>('DB_HOST')!,
      port: configService.get<number>('DB_PORT')!,
      name: configService.get<string>('DB_NAME')!,
      username: configService.get<string>('DB_USERNAME')!,
      password: configService.get<string>('DB_PASSWORD')!,
    };
  }

  public getDbConfig() {
    return this.databaseConfig;
  }
}
