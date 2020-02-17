import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { environment } from '../../environments/environment';
import { TokenService } from "../services/token-service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false; 
  model: any = {};

  constructor(
    private toastr: ToastrService, 
    private formBuilder: FormBuilder, 
    private router: Router, 
    private authenticationService: AuthenticationService,
    private tokenService: TokenService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.authenticationService.login(loginPayload).subscribe(data => {
      if(data.status === 200) {
        this.tokenService.setToken(data.result); 

        // After the user has logged in, emit the subject changes.
        this.tokenService.IsUserLogged = true;
        this.tokenService.UserLogged.next(true);

        this.router.navigate(['list-flight']);
      }else {
        this.invalidLogin = true;
        this.toastr.error(data.message, '',{
          timeOut: 3000
        });        
      }
    });
  }

  logout() { 
    this.authenticationService.logout();
  }

  ngOnInit() {
    this.tokenService.removeToken();

    this.tokenService.IsUserLogged = false;
    this.tokenService.UserLogged.next(false);

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });

    // this.model = {
    //   email: environment.user,
    //   email: environment.password
    // };

    this.loginForm = new FormGroup({
      username: new FormControl(environment.user),
      password: new FormControl(environment.password),
    });
  }

}