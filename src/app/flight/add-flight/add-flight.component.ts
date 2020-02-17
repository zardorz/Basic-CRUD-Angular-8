import { Component, OnInit,Inject } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { TokenService } from '../../services/token-service';
import {Flight} from '../../model/flight.model';
import {FlightService} from '../../services/flight.service';
import { ToastrService } from 'ngx-toastr'; 
 

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor(
    private toastr: ToastrService, 
    private formBuilder: FormBuilder,
    private router: Router, 
    private flightService: FlightService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      dateDeparture: ['', Validators.required], 
      source: ['', Validators.required],
      destiny: ['', Validators.required]
    });

  }

  onSubmit() {

    var flightPayload = new Flight(); 
      flightPayload.name = this.addForm.controls.name.value;
      flightPayload.dateDeparture  =this.addForm.controls.dateDeparture.value; 
      flightPayload.source = this.addForm.controls.source.value;
      flightPayload.destiny = this.addForm.controls.destiny.value;
    

    this.flightService.createFlight(flightPayload)
      .subscribe( data => {
        if(data.status === 200) {
          this.toastr.success(data.message, '',{
            timeOut: 3000
          });

          this.router.navigate(['list-flight']);
        }else {
          this.toastr.error(data.message, '',{
            timeOut: 3000
          });        
        }        
      });
  }

  listFlight(): void {
    this.router.navigate(['list-flight']);
  };  
}
