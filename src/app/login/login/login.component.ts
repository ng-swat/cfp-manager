import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../common/authentication/authentication.service';
import {NavigationExtras, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {select} from "@angular-redux/store";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*constructor(public authService: AuthenticationService, public router: Router) {
    let hello='hello';
  }*/

  public loginForm: FormGroup;
  public auth: AuthenticationService;

  @select('user') public user;

  constructor(fb: FormBuilder,  auth: AuthenticationService, public router: Router) {
    this.auth      = auth;
    this.loginForm = fb.group({
      UsernameEmail   : null,
      Password: null
    });
    this.user.subscribe((value) => {
      if(typeof value.pending !== 'undefined' && !value.pending) {//value.user.pending) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        this.auth.isLoggedIn = true;
        let redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/dashboard';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  get UsernameEmail(): FormControl {
    return <FormControl> this.loginForm.get('UsernameEmail');
  }

  get Password(): FormControl {
    return <FormControl> this.loginForm.get('Password');
  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.loginForm.value);
  }
  /*login() {
    //this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      //this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    //this.setMessage();
  }*/

}
