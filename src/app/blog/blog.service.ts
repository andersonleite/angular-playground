import { Injectable, Inject } from '@angular/core';
import { Blog } from './blog.model';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { IBlogService } from './blog.interface';

export const API_URL = 'https://localhost:3000/api/blog';

@Injectable()
export class BlogService implements IBlogService {

  constructor(@Inject(API_URL) private apiUrl: string, private http: Http) {
  }

  getData(): Observable<Blog> {
    return this.http.get(this.apiUrl)
      .map((response: Response) => {
        console.log(response.json())
        return new Blog({
          message: <any> response.json().message,
        });
      });
  }

}
