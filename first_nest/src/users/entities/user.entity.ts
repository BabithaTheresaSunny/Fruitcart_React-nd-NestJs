import { Note } from 'src/notes/entities/note.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // @Column({ default: true })
  // isActive: boolean;

  @OneToMany((type) => Note, (note) => note.user)
  @JoinColumn({ name: 'notes' })
  notes: Note[];
}
