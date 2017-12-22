import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  error(message: string): void {
    alert(message)
  }

  warn(message: string): void {
  }

}
