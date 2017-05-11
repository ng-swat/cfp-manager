/**
 * Created by maximedenoun on 2017-05-07.
 */
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {Mock} from "./auth.mock";
import {LOGIN, LOGIN_SUCCESS} from "../../app.state";


export const authMdl = store => next => action => {
  let authenticationReq = {
    login(): Observable<boolean> {
      return Observable.of(true).delay(1000).do(val => {
        this.value = 'Success';
      });
    }
  };
  if (action.type === LOGIN) {
    authenticationReq.login().subscribe((value) => {
      next({type: LOGIN_SUCCESS, payload: Mock.retrievedUser()});//{email: "maximedenoun73@gmail.com"}});
    });
    return next(action);
  }
  return next(action);
}
