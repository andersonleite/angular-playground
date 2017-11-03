import * as Rollbar from 'rollbar';
import { ErrorHandler, Injectable, Injector } from '@angular/core';


const rollbarConfig = {
  accessToken: '096a78d21dea49e98aa872619b29cabb',
  captureUncaught: true,
  captureUnhandledRejections: true,
};

export function rollbarFactory() {
  return new Rollbar(rollbarConfig);
}

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  rollbar: any;
  constructor(private injector: Injector) {
    this.rollbar = injector.get(Rollbar);
  }

  handleError(err: any ): void {
    console.log(err);
    this.rollbar.error(err.originalError || err);
  }
}
