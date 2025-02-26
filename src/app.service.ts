import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {message: string} {
    return {message: 'Hello World!'};
  }

  getHola(): {message: string} {
    return {message: 'Que tal ?'};
  }
}
