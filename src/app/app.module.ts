import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthenticationModule} from "./common/authentication/authentication.module";

import {NgReduxModule, NgRedux} from "@angular-redux/store";
import {combineReducers} from "redux";
import {authReducer} from "./common/authentication/authentication.reducer";
import {profileReducer} from "./profile/profile.reducer";
import {authMdl} from "./common/middleware/auth.middleware";
import {profileMdl} from "./common/middleware/profile.middleware";
import {IAppState, INITIAL_STATE} from "./app.state";


const rootReducer= combineReducers({//<IAppState>({
  user: authReducer,
  profile: profileReducer
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    AuthenticationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>){//IAppState>) {
    ngRedux.configureStore(rootReducer, {}, [authMdl, profileMdl]);//INITIAL_STATE, [authMdl, profileMdl]);//rootReducer, {}, [authMdl, profileMdl]);
  }
}
