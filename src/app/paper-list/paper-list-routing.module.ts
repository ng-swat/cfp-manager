import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PaperListComponent} from "./paper-list.component";

const routes:Routes = [
  {path: '', component:PaperListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaperListRoutingModule { }
