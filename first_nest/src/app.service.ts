import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(ho): string {
    return ho;
  }
}
