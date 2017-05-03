import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const routes:Routes = [
  {
    path: '',
    component:DashboardComponent,
    children: [
      { path: '', redirectTo: '/dashboard/profile', pathMatch: 'full' },
      { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule'},
      { path: 'paper-list', loadChildren: 'app/paper-list/paper-list.module#PaperListModule'},
      { path: 'new-paper', loadChildren: 'app/new-paper/new-paper.module#NewPaperModule'},
      { path: 'password', loadChildren: 'app/password/password.module#PasswordModule'},
      { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
      { path: '**',   redirectTo: '/dashboard/profile', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
