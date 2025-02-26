import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsController } from './persons/persons.controller';
import { TaskModule } from './task/task.module';
import { BookModule } from './book/book.module';


@Module({
  imports: [TaskModule, BookModule],
  controllers: [AppController, PersonsController],
  providers: [AppService],
})
export class AppModule {}
