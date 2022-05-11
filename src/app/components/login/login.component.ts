import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';
  isLoading: boolean = false;


  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
    $('.error-message-container').hide();

    if (this._AuthService.isLoggedIn()) {
      this._Router.navigate(['/home']);
    }
  }



  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9\d@$%#&]{8,}$')]),
  })



  submitLoginForm(loginFormData: FormGroup) {

    this.isLoading = true;

    this._AuthService.makeUserLogin(loginFormData.value).subscribe((response) => {
      if (response.success) {
        this.isLoading = false;
        localStorage.setItem('currentUserToken', response.data.token);
        this._AuthService.saveCurrentUser();
        this._Router.navigate(['/home']);
      }
      else {
        this.isLoading = false;
        this.errorMessage = response.message;
        this.showErrorALert()

      }
    })

  }


  showErrorALert() {
    $('.error-message-container').fadeIn(400);
    // setTimeout(function () {
    //   $('.error-message-container').fadeOut('slow');
    // }, 3000);
  }





}
