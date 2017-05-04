import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import NavigationModule from "../navigation/navigation.module";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardServiceModule} from "../common/dashboard/dashboard.service.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardServiceModule,
    NavigationModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule { }
