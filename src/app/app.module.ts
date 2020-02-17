import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from './services/authentication.service';
import { TokenService } from './services/token-service';

import { JwtInterceptor } from './shared/auth/JwtInterceptor';
import { AuthGuard } from './shared/auth/auth-guard';



import { LoginComponent } from './login/login.component';
import { EditFlightComponent } from './flight/edit-flight/edit-flight.component';
import { AddFlightComponent } from './flight/add-flight/add-flight.component';
import { ListFlightComponent } from './flight/list-flight/list-flight.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditFlightComponent,
    AddFlightComponent,
    ListFlightComponent,
    HeaderComponent, 
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,  
  ],
  providers: [ 
    AuthGuard,
    AuthenticationService,
    TokenService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
