/**
 * Created by maximedenoun on 2017-05-07.
 */
export interface IUser {
  pending: boolean;
  firstName: string;
  email: string;
  /*password: string;*/
}
export interface IProfile {
  pending: boolean;
}

export interface IAppState {
  user: IUser;
  profile: IProfile;
}

export const INITIAL_USER:IUser = {
  pending: true,
  firstName: '',
  email: '',/*
   password: ''*/
}
export const INITIAL_PROFILE:IProfile = {
  pending: true,
}
export const INITIAL_STATE: IAppState = {
  user: INITIAL_USER,
  profile: INITIAL_PROFILE
};

export const LOGIN         = 'LOGIN';
export const LOGOUT        = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR   = 'LOGIN_ERROR';

export const PROFILE         = 'PROFILE';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_ERROR   = 'PROFILE_ERROR';
