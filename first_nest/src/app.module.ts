import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';
import { NotesModule } from './notes/notes.module';
import { Note } from './notes/entities/note.entity';

@Module({
  imports: [
    UsersModule,
    LoginModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'myfirst_nest',
      entities: [User, Admin, Note],
      synchronize: true,
    }),
    AdminModule,
    NotesModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
