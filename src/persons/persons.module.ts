import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonSchema } from './person.schema';
import { PersonRepository } from './person-repository.service';
import { HelloService } from './hello.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Persons',
      schema: PersonSchema
    }]),
  ],
  controllers: [PersonsController],
  providers: [PersonRepository, HelloService],
})
export class PersonsModule {}
