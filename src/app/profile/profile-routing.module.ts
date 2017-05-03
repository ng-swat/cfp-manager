/**
 * Created by maximedenoun on 2017-05-01.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./profile.component";

const routes:Routes = [
  {path: '', component:ProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule { }

