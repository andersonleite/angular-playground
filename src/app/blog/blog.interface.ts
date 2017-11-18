import { Observable } from "rxjs/Observable";
import { Blog } from './blog.model';

export interface IBlogService {
  getData(): Observable<Blog>;
}
