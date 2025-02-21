import type { UserRoles } from 'src/enums/roles.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id: string;

  @Column({ name: 'username', type: 'varchar', nullable: false, unique: true })
  username: string;

  @Column({ name: 'password', type: 'varchar', nullable: false })
  password: string;

  @Column({ name: 'user_role', type: 'varchar', nullable: false })
  role: UserRoles;

  @Column({ type: 'bool', name: 'user_status', default: true })
  isActive: boolean;
}
