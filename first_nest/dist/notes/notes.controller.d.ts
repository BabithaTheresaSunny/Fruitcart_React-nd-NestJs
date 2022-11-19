import { NotesService } from './notes.service';
import { UsersService } from 'src/users/users.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesController {
    private readonly notesService;
    private readonly userService;
    constructor(notesService: NotesService, userService: UsersService);
    create3(createNoteDto: CreateNoteDto): Promise<{
        desc: string;
        user: any;
    } & import("./entities/note.entity").Note>;
    findAll(): Promise<import("./entities/note.entity").Note[]>;
    findOne(id: string): Promise<import("./entities/note.entity").Note>;
    findNotesofSpecificUser(id: string): Promise<import("./entities/note.entity").Note[]>;
    update(id: string, updateNoteDto: UpdateNoteDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
