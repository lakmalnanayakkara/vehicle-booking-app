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

export interface JwtConfig {
  secret_key: string;
  validity: number;
}

export interface EmailConfig {
  host: string;
  port: string;
  user: string;
  secret: string;
}

@Injectable()
export class ConfigurationService {
  private databaseConfig: DatabaseConfig;
  private jwtConfig: JwtConfig;
  private emailConfig: EmailConfig;

  constructor(private readonly configService: ConfigService) {
    this.databaseConfig = {
      type: configService.get<string>('DB_TYPE')!,
      host: configService.get<string>('DB_HOST')!,
      port: configService.get<number>('DB_PORT')!,
      name: configService.get<string>('DB_NAME')!,
      username: configService.get<string>('DB_USERNAME')!,
      password: configService.get<string>('DB_PASSWORD')!,
    };

    this.jwtConfig = {
      secret_key: configService.get<string>('SECRET_KEY')!,
      validity: configService.get<number>('TOKEN_VALIDITY')!,
    };

    this.emailConfig = {
      host: configService.get<string>('EMAIL_HOST')!,
      port: configService.get<string>('EMAIL_PORT')!,
      user: configService.get<string>('EMAIL_USER')!,
      secret: configService.get<string>('EMAIL_SECRET_KEY')!,
    };
  }

  public getDbConfig() {
    return this.databaseConfig;
  }

  public getJwtConfig() {
    return this.jwtConfig;
  }

  public getEmailConfig() {
    return this.emailConfig;
  }
}
