import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { Iuser } from './../../core/interfaces/iuser';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: Iuser = {
    email: '',
    password: ''
  };

  constructor(private _authSrv: AuthService,
    private _router: Router,
    private _toastSrv: ToasterService) { }

  ngOnInit() {
  }

  signUp() {
    this._authSrv.signUpWithEmail(this.user.email, this.user.password)
      .then((u) => {
        if(u) {
          this._toastSrv.pop('success', 'SignUp Sucess');
          this._router.navigateByUrl('/catalogue');
        }
      })
      .catch(error => {
        this._toastSrv.pop('error', 'SignUp Faild...', error);
      })
  }

}
