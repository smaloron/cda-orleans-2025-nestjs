import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
class Person {

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  jobTitle: string;
}

export type PersonDocument = HydratedDocument<Person>

export const PersonSchema = SchemaFactory.createForClass(Person);