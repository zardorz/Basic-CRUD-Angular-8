import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenService } from './../../services/token-service';
import { Observable } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate {
  constructor(
          private router: Router,
          private tokenService: TokenService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      const helper = new JwtHelperService();
      
      if(this.tokenService.IsUserLogged) {
          // logged in so return true
          let token = this.tokenService.getParsedToken();

          if(helper.isTokenExpired(token.accessToken))
          {
              // Token expired, then redirect to login
              this.router.navigate(['/login']);
              return false;
          }

          return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login']);
      return false;
  }
  
}
