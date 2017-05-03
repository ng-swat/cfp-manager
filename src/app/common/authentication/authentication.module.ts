import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from "./authentication.service";
import {AuthenticationGuardService} from "./authentication-guard.service";

@NgModule({
  providers: [AuthenticationService, AuthenticationGuardService]
})
export class AuthenticationModule { }
