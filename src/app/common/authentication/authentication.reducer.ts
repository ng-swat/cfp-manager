/**
 * Created by maximedenoun on 2017-05-07.
 */
import {IAppState, INITIAL_STATE, LOGIN, LOGIN_SUCCESS, LOGOUT} from "../../app.state";

export function authReducer(state:IAppState = INITIAL_STATE, action):IAppState {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {pending: true});
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {user: action.payload, pending: false});/*{user: {...action.payload, pending: false}});*/
    case LOGOUT:
      return Object.assign({}, state, {user: null, pending: true});
    default:
      return state;
  }
}
