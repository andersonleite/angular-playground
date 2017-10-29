import { IHeaderService } from './header.interface';
import { Injectable, Inject } from '@angular/core';
import { Header } from './header.model';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

export const API_URL = 'https://rails-playground-api.herokuapp.com/api/header';

@Injectable()
export class HeaderService implements IHeaderService {

  constructor(@Inject(API_URL) private apiUrl: string, private http: Http){ }

  getData(): Observable<Header> {
    return this.http.get('https://rails-playground-api.herokuapp.com/api/header')
    .map((response: Response) => {
      return new Header({
        title: <any> response.json().title,
      })
    })
  }

}
