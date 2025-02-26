import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

interface ReturnMessage {
  message: string;
}

@Controller('persons')
export class PersonsController {

  @Get()
  getAll(@Query('page') page: number = 1): ReturnMessage{
    return {
      message: `Toutes les personnes page= ${page} ${typeof page}`
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): ReturnMessage {
    return {
      message: `Personne dont l'id est ${id}`
    };
  }

  @Post()
  insertOne(@Body() person: {name: string}): ReturnMessage {
    return {
      message: `Personne dont le nom est ${person.name}`
    }
  }
}
