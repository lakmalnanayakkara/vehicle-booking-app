import {
  ForbiddenException,
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get<boolean>(
      'IS_PUBLIC_KEY',
      context.getHandler(),
    );

    const requiredRole = this.reflector.get<string>(
      'role',
      context.getHandler(),
    );

    if (isPublic) {
      return true;
    }

    if (!requiredRole) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !user.role || !this.matchRoles(requiredRole, user.role)) {
      throw new ForbiddenException("You don't have permission", {
        cause: new Error(),
        description: "You don't have permission",
      });
    }

    return true;
  }

  private matchRoles(required: string, userRole: string): boolean {
    return required === userRole;
  }
}
