import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../common/dashboard/dashboard.service';
import {Menu} from '../common/business/model/menu';
import {User} from '../common/business/model/user';
import {select} from "@angular-redux/store";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public menus:Menu[];
  //public user:User;
  @select('user') public user;
  constructor(private service: DashboardService) {
    this.menus = this.service.getMenus();
    //this.user = this.service.getUser();
  }

  ngOnInit() {
  }

}
