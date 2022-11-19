import { Note } from 'src/notes/entities/note.entity';
export declare class User {
    id: number;
    userName: string;
    email: string;
    password: string;
    notes: Note[];
}
