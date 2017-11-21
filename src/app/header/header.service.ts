import { IHeaderService } from './header.interface';
import { Injectable, Inject } from '@angular/core';
import { Header } from './header.model';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

const endpoint = '/api/header';
export const API_URL = environment.apiUrl + endpoint;

@Injectable()
export class HeaderService implements IHeaderService {

  constructor(@Inject(API_URL) private apiUrl: string, private http: Http) {
  }

  getData(): Observable<Header> {
    return this.http.get(this.apiUrl)
      .map((response: Response) => {
        return new Header({
          title: <any> response.json().title,
        });
      });
  }

}
