import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PersonDto, UpdatePersonDto } from './person.dto';
import { HelloService } from './hello.service';
import { PersonRepository } from './person-repository.service';
import { PersonDocument } from './person.schema';

interface ReturnMessage {
  message: string;
  data?: PersonDocument | PersonDocument[];
}

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

  @Patch(':id')
  updateOne(
    @Param('id') id: string,
    @Body() person: UpdatePersonDto): ReturnMessage {
    return {
      message: `Mise à jour d'une personne dont l'id est ${id}`
    }
  }
}
