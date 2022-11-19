import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { UsersService } from 'src/users/users.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('notes')
export class NotesController {
  constructor(
    private readonly notesService: NotesService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  async create3(@Body() createNoteDto: CreateNoteDto) {
    const userData = await this.userService.findOne(createNoteDto.userid);
    return this.notesService.create2(createNoteDto, userData);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @Get('userInNotes/:id')
  async findNotesofSpecificUser(@Param('id') id: string) {
    const userData = await this.userService.findOne(+id);
    console.log(userData);
    return await this.notesService.findNotesofUser(userData);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
