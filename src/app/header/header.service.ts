import { IHeaderService } from './header.interface';

export class HeaderService implements IHeaderService {

  getData(): string {
    console.log('injected');
    return 'HEY'
  }

}
