import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
export declare class NotesService {
    private noteRepo;
    constructor(noteRepo: Repository<Note>);
    create2(createNoteDto: CreateNoteDto, userData: any): Promise<{
        desc: string;
        user: any;
    } & Note>;
    findAll(): Promise<Note[]>;
    findOne(id: number): Promise<Note>;
    findNotesofUser(userData: any): Promise<Note[]>;
    update(id: number, updateNoteDto: UpdateNoteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
