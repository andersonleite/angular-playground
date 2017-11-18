import {
  BlogService,
  API_URL
} from './blog.service';

export const blogInjectables: Array<any> = [
  {provide: BlogService, useClass: BlogService},
  {provide: API_URL, useValue: API_URL}
];
