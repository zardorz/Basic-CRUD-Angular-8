import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth/auth-guard';
import {LoginComponent} from "./login/login.component";
import {AddFlightComponent} from "./flight/add-flight/add-flight.component";
import {ListFlightComponent} from "./flight/list-flight/list-flight.component";
import {EditFlightComponent} from "./flight/edit-flight/edit-flight.component";

const routes: Routes = [ 
    { path: 'login', component: LoginComponent },
    { path: 'logout', canActivate: [AuthGuard], component: LoginComponent },
    { path: 'add-flight',  canActivate: [AuthGuard], component: AddFlightComponent },
    { path: 'list-flight',  canActivate: [AuthGuard], component: ListFlightComponent },
    { path: 'edit-flight/:id',  canActivate: [AuthGuard], component: EditFlightComponent },
    { path : '', component : LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
