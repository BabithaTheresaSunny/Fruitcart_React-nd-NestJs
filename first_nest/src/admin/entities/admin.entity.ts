import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  passenger_name: string;

  @Column()
  Flight_No: number;

  @Column()
  isAdult: boolean;
}
