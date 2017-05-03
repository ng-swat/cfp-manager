/**
 * Created by maximedenoun on 2017-05-01.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NewPaperComponent} from "./new-paper.component";

const routes:Routes = [
  {path: '', component:NewPaperComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewPaperRoutingModule { }

