import { IHeaderService } from './header.interface';
import { Injectable, Inject } from '@angular/core';

export const API_URL = 'https://rails-playground-api.herokuapp.com/api/header';

@Injectable()
export class HeaderService implements IHeaderService {

  constructor(@Inject(API_URL) private apiUrl: string){

  }

  getData(): string {
    console.log('injected');
    return 'HEY'
  }

}
