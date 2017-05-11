import { Injectable } from '@angular/core';
import {NgRedux} from "@angular-redux/store";
import {IAppState, PROFILE} from "../app.state";

@Injectable()
export class ProfileService {
  constructor(private store: NgRedux<IAppState>) { }
  retrieveProfile(userValue) {
    this.store.dispatch({
      type   : PROFILE,
      payload: userValue
    });
  }

}
