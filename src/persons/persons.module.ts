import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressSchema, PersonSchema } from './person.schema';
import { PersonRepository } from './person-repository.service';
import { HelloService } from './hello.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Persons',
      schema: PersonSchema
    }]),
    MongooseModule.forFeature([{
      name: 'Addresses',
      schema: AddressSchema
    }])
  ],
  controllers: [PersonsController],
  providers: [PersonRepository, HelloService],
})
export class PersonsModule {}
