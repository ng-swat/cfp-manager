import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthenticationGuardService} from "../common/authentication/authentication-guard.service";
import {AuthenticationService} from "../common/authentication/authentication.service";

const routes:Routes = [
  {path: '', component:LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthenticationGuardService,
    AuthenticationService
  ]
})
export class LoginRoutingModule { }
