import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {LoginRoutingModule} from "./login-routing.module";
import {AuthenticationModule} from "../common/authentication/authentication.module";

@NgModule({
  imports: [
    CommonModule,
    AuthenticationModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
