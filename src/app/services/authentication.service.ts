import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/index";
import { ApiResponse } from "../model/api.response";
import { TokenService } from "../services/token-service";
import { Authorization } from '../model/authorization.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }
  baseUrl: string = `${environment.apiOpen}/authentication`;


  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/login', loginPayload);
  }

  logout() { 

    var authorization = <Authorization>this.tokenService.getParsedToken();;
    
    if (authorization == null && !this.tokenService.isUserLogged )
      return true;

    var res = this.http.post<ApiResponse>(this.baseUrl + '/login', authorization.sessionId );

    if(res){
      // remove user from local storage to log user out
      this.tokenService.removeToken(); 
      this.tokenService.IsUserLogged = false;
      this.tokenService.UserLogged.next(false);

      return true;
    }else{
      return false;
    }
  }
 
}
