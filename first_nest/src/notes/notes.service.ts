import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private noteRepo: Repository<Note>,
  ) {}
  async create2(createNoteDto: CreateNoteDto, userData: any) {
    // const note = this.noteRepo.create(createNoteDto);
    return await this.noteRepo.save({
      desc: createNoteDto.desc,
      user: userData,
    });
  }

  async findAll() {
    return await this.noteRepo.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.noteRepo.findOne({
      where: { id: id },
      relations: ['user'],
    });
  }

  async findNotesofUser(userData: any) {
    return await this.noteRepo.find({
      where: { user: userData },
    });
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return this.noteRepo.update(id, updateNoteDto);
  }

  remove(id: number) {
    return this.noteRepo.delete(id);
  }
}
