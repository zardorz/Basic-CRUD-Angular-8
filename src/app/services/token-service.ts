import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Authorization } from '../model/authorization.model';

@Injectable({ providedIn: "root" })
export class TokenService
{
    authorization: Authorization;
    isUserLogged: boolean = false;

    public UserLogged: Subject<boolean> = new Subject<boolean>();

    get IsUserLogged(): boolean {
        this.authorization = <Authorization> JSON.parse(sessionStorage.getItem('currentUser'));
    
        if (this.authorization != null && this.isUserLogged )
          return true;
        else
          return false; 
      }

    set IsUserLogged(value: boolean) {
        this.isUserLogged = value;
    }

    public hasToken(): boolean
    {
        if(sessionStorage.getItem('currentUser'))
        {
            return true;
        }
        return false;
    }

    public getParsedToken()
    {
        return JSON.parse(sessionStorage.getItem("currentUser"));
    }

    public getToken()
    {
        return sessionStorage.getItem("currentUser");
    }

    public setToken(token: any)
    {
        this.removeToken();
        sessionStorage.setItem("currentUser", JSON.stringify(token));
    }

    public removeToken()
    {
        sessionStorage.removeItem("currentUser");
    }

}