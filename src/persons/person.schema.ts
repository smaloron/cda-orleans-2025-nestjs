import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';


@Schema()
export class Address extends Document {

  @Prop({required: true})
  city: string;

  @Prop({required: true})
  zipCode: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);


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

  @Prop({
    required: false,
    type: MongooseSchema.Types.ObjectId,
    ref: 'Address'}
  )
  address: Address;
}

export type PersonDocument = HydratedDocument<Person>

export const PersonSchema = SchemaFactory.createForClass(Person);