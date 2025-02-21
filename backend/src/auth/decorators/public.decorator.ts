import { SetMetadata } from '@nestjs/common';

export const Public = (isPublic: boolean) =>
  SetMetadata('IS_PUBLIC_KEY', isPublic);
