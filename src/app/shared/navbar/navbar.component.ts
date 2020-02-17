import { Component, OnInit } from '@angular/core';
import { TokenService } from "../../services/token-service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //currentUser: User;  
  isUserLoggedIn : boolean ;

  constructor(private tokenService: TokenService) { 

    this.isUserLoggedIn = this.tokenService.IsUserLogged;
 
    this.tokenService.UserLogged.subscribe(value => {
      //debugger;
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit(): void {
    
  }
}
