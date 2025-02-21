import {
  Injectable,
  UnauthorizedException,
  type CanActivate,
  type ExecutionContext,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private reflector: Reflector,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get<boolean>(
      'IS_PUBLIC_KEY',
      context.getHandler(),
    );
    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);

    if (isPublic) {
      return true;
    }

    if (!token) {
      throw new UnauthorizedException('Unauthorized access1', {
        cause: new Error(),
        description: 'Unauthorized access1',
      });
    }

    try {
      const payload = this.authService.validateToken(token);
      request.user = payload;
      return true;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException('Unauthorized access2', {
        cause: new Error(),
        description: 'Unauthorized access2',
      });
    }
  }

  private extractToken(request): string | null {
    const authHeader = request.headers.authorization;
    if (authHeader && authHeader.split(' ')[0] === 'Bearer') {
      return authHeader.split(' ')[1];
    }
    return null;
  }
}
