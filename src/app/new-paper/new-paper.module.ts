import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPaperComponent } from './new-paper.component';
import {NewPaperRoutingModule} from "./new-paper-routing.module";

@NgModule({
  imports: [
    CommonModule,
    NewPaperRoutingModule
  ],
  declarations: [NewPaperComponent]
})
export class NewPaperModule { }
