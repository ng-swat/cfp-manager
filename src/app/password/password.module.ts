import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import {PasswordRoutingModule} from "./password-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordRoutingModule
  ],
  declarations: [PasswordComponent]
})
export class PasswordModule { }
