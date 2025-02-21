import { SetMetadata } from '@nestjs/common';
import type { UserRoles } from 'src/enums/roles.enum';

export const Roles = (role: UserRoles) => SetMetadata('role', role);
