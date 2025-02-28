import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { PersonDto, UpdatePersonDto } from './person.dto';
import { HelloService } from './hello.service';
import { PersonRepository } from './person-repository.service';
import { PersonDocument } from './person.schema';
import { ApiKeyGuard } from '../api-key/api-key.guard';

interface ReturnMessage {
  message: string;
  data?: PersonDocument | PersonDocument[] | any;
}

// @UseGuards(ApiKeyGuard)
@Controller('persons')
export class PersonsController {

  constructor(
    private helloService: HelloService,
    private personRepository: PersonRepository,
  ){}

  @Get()
  async getAll(
    @Query('page') page: number = 1
  ): Promise<ReturnMessage>
  {
    const persons: PersonDocument[] = await this.personRepository
                                                .findAll();
    return {
      message: ``,
      data: persons
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): ReturnMessage {
    return {
      message: `Personne dont l'id est ${id}`
    };
  }

  @Post()
  async insertOne(@Body() personDto: PersonDto): Promise<ReturnMessage> {
    const person = await this.personRepository.save(personDto);
    return {
      message: `Personne dont le nom est ${person._id}`,
      data: person
    }
  }

  @Put(':id')
  async replaceOne(
    @Param('id') id: string,
    @Body() person: PersonDto): Promise<ReturnMessage> {
    return await this.updateOne(id, person);
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() person: UpdatePersonDto
  ): Promise<ReturnMessage> {
    const updatedPerson = await this.personRepository.update(
      id, person
    );
    return {
      message: 'Mise à jour ok',
      data: updatedPerson?.toObject()//{...updatedPerson, ...person}
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ReturnMessage> {
    await this.personRepository.deleteOne(id);
    return {
      message: `Suppression de la personne dont l'id est ${id}`
    }
  }

}
