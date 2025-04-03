import type { UserRoles } from 'src/enums/roles.enum';
import type {
  UserSignInDetails,
  UserSignUpDetails,
} from 'src/interface/user.interface';
import { Column, Entity,  PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User implements UserSignUpDetails, UserSignInDetails {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id: string;

  @Column({ name: 'name', type: 'varchar', nullable: false })
  name: string;

  @Column({ name: 'address', type: 'varchar', nullable: false })
  address: string;

  @Column({
    name: 'NIC_Number',
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  nicNumber: string;

  @Column({ name: 'phone_number', type: 'varchar', nullable: false })
  phoneNumber: string;

  @Column({ name: 'email', type: 'varchar', nullable: false })
  email: string;

  @Column({ name: 'username', type: 'varchar', nullable: false, unique: true })
  username: string;

  @Column({ name: 'password', type: 'varchar', nullable: false })  
  password: string;

  @Column({ name: 'user_role', type: 'varchar', nullable: false })
  role: UserRoles;

  @Column({ type: 'bool', name: 'user_status', default: true })
  isActive: boolean;
}
