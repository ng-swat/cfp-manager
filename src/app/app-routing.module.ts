import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationGuardService} from "./common/authentication/authentication-guard.service";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'/*,
    canLoad: [AuthenticationGuardService]*/
  }/*,
   { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
