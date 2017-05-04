import { Injectable } from '@angular/core';
import {Menu} from '../business/model/menu';
import {User} from '../business/model/user';

@Injectable()
export class DashboardService {
  private menus = [];
  private user;
  constructor() {
    this.menus.push(new Menu(1, 'Profile', 'fa fa-user', './profile'));//glyphicon glyphicon-user
    this.menus.push(new Menu(2, 'Papers list', 'fa fa-bars', './paper-list'));//glyphicon glyphicon-list
    this.menus.push(new Menu(3, 'New paper', 'fa fa-newspaper-o', './new-paper'));//glyphicon glyphicon-plus
    this.menus.push(new Menu(4, 'Password', 'fa fa-lock', './password'));//glyphicon glyphicon-lock
    this.menus.push(new Menu(5, 'Logout', 'fa fa-window-close', './logout'));//glyphicon glyphicon-remove
    this.user = new User(286, 'Maxime', '../assets/286.jpg');
  }

  getMenus():Menu[] {
    return this.menus;
  }

  getUser():User {
    return this.user;
  }

}
