import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaperListComponent} from "./paper-list.component";
import {PaperListRoutingModule} from "./paper-list-routing.module";

@NgModule({
  imports: [
    CommonModule,
    PaperListRoutingModule
  ],
  declarations: [PaperListComponent]
})
export class PaperListModule { }
