import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {NgRedux} from "@angular-redux/store";
import {IAppState, LOGIN, LOGOUT} from "../../app.state";

@Injectable()
export class AuthenticationService {
  /*isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val =>
    {
      this.isLoggedIn = true
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }*/
  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private store: NgRedux<IAppState>) {
  }

  login(userValue) {
    this.store.dispatch({
      type   : LOGIN,
      payload: userValue
    });
  }

  logout() {
    this.store.dispatch({
      type: LOGOUT
    });
  }
}
