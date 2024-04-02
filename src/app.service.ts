import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the Nest JS Application';
  }

  sayHello(): string {
    return 'Say hello to the new Nest JS Application user';
  }
}
