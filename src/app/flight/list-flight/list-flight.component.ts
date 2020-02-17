import { Component, OnInit,Inject } from '@angular/core';
import {Router} from '@angular/router';
import { TokenService } from '../../services/token-service';
import {Flight} from '../../model/flight.model';
import {FlightService} from '../../services/flight.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-flight',
  templateUrl: './list-flight.component.html',
  styleUrls: ['./list-flight.component.css']
})
export class ListFlightComponent implements OnInit {

  flights: Flight[];

  constructor(private router: Router,
             private toastr: ToastrService, 
             private flightService: FlightService,
             private tokenService: TokenService) { }

  ngOnInit() {
    this.getAllFlights();
  }

  private getAllFlights() {
    this.flightService.getFlights()
      .subscribe( data => {
        this.flights = data.result;
      });
  }

  deleteFlight(flight: Flight): void {
    this.flightService.deleteFlight(flight)
      .subscribe( data => {
        if(data.status === 200) {
          this.toastr.success(data.message, '',{
            timeOut: 3000
          });

          this.getAllFlights();
        }else {
          this.toastr.error(data.message, '',{
            timeOut: 3000
          });        
        }   
      })
  };

  editFlight(flight: Flight): void {
    this.router.navigate(['edit-flight/', flight.id]);
  };

  addFlight(): void {
    this.router.navigate(['add-flight']);
  };

}
