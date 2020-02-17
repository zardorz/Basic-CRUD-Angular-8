import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Flight } from "../model/flight.model";
import { Observable }  from "rxjs/index";
import { ApiResponse } from "../model/api.response"; 

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }
  baseUrl: string = `${environment.apiProtected}/flight`;


  getFlights() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl );
  }

  getFlightByID( flight_id: number ) : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/id/' + flight_id );
  }

  editFlight( flightPayload:Flight ) : Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl ,  flightPayload );
  }

  deleteFlight( flightPayload:Flight ) : Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + '/id/' + flightPayload.id );
  }

  createFlight( flightPayload:Flight ) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl , flightPayload );
  }

}
