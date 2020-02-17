import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { TokenService } from '../../services/token-service';
import { Flight } from '../../model/flight.model';
import { FlightService } from '../../services/flight.service';
import { ToastrService } from 'ngx-toastr'; 
 

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent implements OnInit {

  id : number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private toastr: ToastrService, 
    private formBuilder: FormBuilder,
    private router: Router, 
    private flightService: FlightService) { }

    editForm: FormGroup;
    flight : Flight;

  ngOnInit() {
    let { url, params } = this._activatedRoute.snapshot;

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      dateDeparture: ['', Validators.required], 
      source: ['', Validators.required],
      destiny: ['', Validators.required]
    });

    if(url.length = 2)
    {
      this.id = Number(url[1].path);
 
      this.flightService.getFlightByID(this.id)
        .subscribe( data => {
          this.flight = data.result;

          this.editForm = new FormGroup({
            name: new FormControl(this.flight.name),
            dateDeparture: new FormControl(this.flight.dateDeparture),
            source: new FormControl(this.flight.source),
            destiny: new FormControl(this.flight.destiny),            
          });          

      });
    }    



  }

  onSubmit() {
  
    

    var flightPayload = new Flight(); 
      flightPayload.id = this.id;
      flightPayload.name = this.editForm.controls.name.value;
      flightPayload.dateDeparture  =this.editForm.controls.dateDeparture.value; 
      flightPayload.source = this.editForm.controls.source.value;
      flightPayload.destiny = this.editForm.controls.destiny.value;
    

    this.flightService.editFlight(flightPayload)
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
