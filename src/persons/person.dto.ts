import { IsEmail, IsNotEmpty, IsNumber, IsOptional, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Schema } from 'mongoose';

export class PersonDto{
  @IsOptional()
  @IsNumber()
  id?:number;

  @IsNotEmpty({message:'Le prénom ne peut être vide'})
  @MinLength(2, {message: 'deux caractères minimum'})
  firstName: string;

  @IsNotEmpty({message:'Le nom de famille ne peut être vide'})
  @MinLength(2, {message: 'deux caractères minimum'})
  lastName: string;


  @IsNumber()
  age: number;

  @IsOptional()
  jobTitle: string;

  @IsOptional()
  address: {city: string, zipCode: string} | any;
}

export class UpdatePersonDto extends PartialType(PersonDto) {}