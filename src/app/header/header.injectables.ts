import {
  HeaderService,
  API_URL
} from './header.service';

export const headerInjectables: Array<any> = [
  {provide: HeaderService, useClass: HeaderService},
  {provide: API_URL, useValue: API_URL}
];
