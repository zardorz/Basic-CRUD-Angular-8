import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authorization } from 'src/app/model/authorization.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = <Authorization>JSON.parse(sessionStorage.getItem('currentUser'));
        
        if (currentUser && currentUser.accessToken) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.accessToken}`
                }
            });
            request = request.clone({
                setHeaders: { 
                    SessionID: `${currentUser.sessionId}`
                }
            });
        }

        return next.handle(request);
    }
}