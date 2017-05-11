/**
 * Created by maximedenoun on 2017-05-08.
 */
import {IAppState, INITIAL_STATE, PROFILE, PROFILE_ERROR, PROFILE_SUCCESS} from "../app.state";


export function profileReducer(state:IAppState = INITIAL_STATE, action):IAppState {
  switch (action.type) {
    case PROFILE:
      return Object.assign({}, state, {pending: true});
    case PROFILE_SUCCESS:
      return Object.assign({}, state, {profile: action.payload, pending: false});
    case PROFILE_ERROR:
      return Object.assign({}, state, {profile: null, pending: true});
    default:
      return state;
  }
}
