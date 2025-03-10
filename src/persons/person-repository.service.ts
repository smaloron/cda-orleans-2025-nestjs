import { Injectable } from '@nestjs/common';
import { Model, Schema } from 'mongoose';
import { PersonDocument } from './person.schema';
import { InjectModel } from '@nestjs/mongoose';
import { PersonDto, UpdatePersonDto } from './person.dto';
import {ObjectId} from 'mongodb';

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

  async update(
    id: string,
    personDto: UpdatePersonDto | PersonDto,
  ): Promise<PersonDocument | null>
  {
    await this.personModel.findOneAndUpdate(
      { _id: new ObjectId(id) },
      personDto
    );

    const updated = await this.personModel.findById(id);

    return updated;
  }

  async deleteOne(id: string): Promise<void> {
    await this.personModel.findByIdAndDelete(id);
  }
}
