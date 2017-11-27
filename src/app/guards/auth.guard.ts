import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authTokenService: Angular2TokenService,
              private router: Router) {
  }

  canActivate() {

    console.log('log', this.authTokenService.userSignedIn());

    if (this.authTokenService.userSignedIn()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
