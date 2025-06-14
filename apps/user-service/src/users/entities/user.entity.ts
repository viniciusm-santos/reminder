import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ type: 'varchar', nullable: true })
  password: string;

  @Column()
  dateOfBirth: string;

  @Column({ default: true })
  isActive: boolean;
}
