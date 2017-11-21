import { Injectable, Inject } from '@angular/core';
import { Blog } from './blog.model';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { IBlogService } from './blog.interface';
import { environment } from '../../environments/environment';

const endpoint = '/api/blog';
export const API_URL = environment.apiUrl + endpoint;

@Injectable()
export class BlogService implements IBlogService {

  messages: Array<Blog>;

  constructor(@Inject(API_URL) private apiUrl: string, private http: Http) {
    this.messages = new Array();
  }

  getData(): Observable<Array<Blog>> {
    return this.http.get(this.apiUrl)
      .map((response: Response) => {
        this.messages = response.json();
        return this.messages;
      });

  }

}
