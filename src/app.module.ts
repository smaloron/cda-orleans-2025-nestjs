import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { BookModule } from './book/book.module';
import { HelloService } from './persons/hello.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonsModule } from './persons/persons.module';


@Module({
  imports: [
    TaskModule, BookModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017',
      { authSource: 'admin' }
    ),
    PersonsModule
  ],
  controllers: [AppController],
  providers: [AppService, HelloService]
})
export class AppModule {}
