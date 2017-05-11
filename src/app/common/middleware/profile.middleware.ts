/**
 * Created by maximedenoun on 2017-05-07.
 */
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {ProfileMock} from "./profile.mock";
import {PROFILE, PROFILE_SUCCESS} from "../../app.state";


export const profileMdl = store => next => action => {
  let profileReq = {
    getProfile(): Observable<boolean> {
      return Observable.of(true).delay(2000).do(val => {
        this.value = 'Success';
      });
    }
  };
  if (action.type === PROFILE) {
    profileReq.getProfile().subscribe((value) => {
      next({type: PROFILE_SUCCESS, payload: ProfileMock.retrievedProfile()});
    });
    return next(action);
  }
  return next(action);
}
