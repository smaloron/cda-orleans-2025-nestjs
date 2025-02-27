import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PersonDocument } from './person.schema';
import { InjectModel } from '@nestjs/mongoose';
import { PersonDto } from './person.dto';

@Injectable()
export class PersonRepository {

  constructor(
    @InjectModel('Persons') private readonly personModel: Model<PersonDocument>
  ){}

  async findAll(): Promise<PersonDocument[]> {
    return this.personModel.find();
  }

  async save(personDto: PersonDto): Promise<PersonDocument> {
    let person = new this.personModel(personDto);
    await person.save();
    return person;
  }
}
