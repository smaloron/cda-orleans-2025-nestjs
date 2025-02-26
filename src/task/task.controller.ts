import { Controller, Get } from '@nestjs/common';

@Controller('task')
export class TaskController {

  @Get()
  getAllTasks() {
    return {
      message: 'Task List',
    }
  }
}
