import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigurationModule } from 'src/configurations/config/configuration.module';
import { ConfigurationService } from 'src/configurations/config/configuration.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigurationModule],
      inject: [ConfigurationService],
      useFactory: (configService: ConfigurationService) => {
        const jwtConfigs = configService.getJwtConfig();
        return {
          secret: jwtConfigs.secret_key,
          signOptions: {
            expiresIn: Math.floor(jwtConfigs.validity),
          },
        };
      },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
