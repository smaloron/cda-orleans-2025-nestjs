import {
  Controller,
  Get, Post, Put, Delete, Patch, Param, Query, Body,
} from '@nestjs/common';

@Controller('book')
export class BookController {

  @Get()
  getAllBooks() {
    return {
      message: 'Book List',
      data: []
    }
  }

  @Get(':id')
  getOneBook(@Param('id') id: number) {
    return {
      message: 'One book',
      data: [],
      id: id
    }
  }

  @Get('search')
  searchBooks(@Query('q') q:string) {
    return {
      message: 'search books',
      data: [],
      query: q
    }
  }

  @Post()
  addBook(@Body() book: any){
    return {
      message: 'added book',
      data: book,
    }
  }

  @Put(':id')
  replaceBook(
    @Param('id') id: number,
    @Body() book: any
  )
  {
    return {
      message: 'replaced book',
      data: book,
      id: id
    }
  }

  @Patch()
  updateBook(
    @Param('id') id: number,
    @Body() book: any
  )
  {
    return {
      message: 'updated book',
      data: book,
      id: id
    }
  }

  @Delete()
  deleteBook(
    @Param('id') id: number,
  )
  {
    return {
      message: 'deleted book',
      data: [],
      id: id
    }
  }

}
