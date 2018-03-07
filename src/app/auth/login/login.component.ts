import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth/auth.service';
import { Iuser } from './../../core/interfaces/iuser';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Iuser = {
    email: '', 
    password: ''
  }

  constructor(private _authSrv: AuthService,
    private _router: Router,
    private _toastSrv: ToasterService) { }

  ngOnInit() {
  }

  loginIn() {
    this._authSrv.loginWithEmail(this.user.email, this.user.password)
      .then((u) => {
        if(u) {
          this._toastSrv.pop('success', 'Login Sucess');
          this._router.navigateByUrl('/catalogue');
        }
      })
      .catch(error => {
        this._toastSrv.pop('error', 'Login Faild...', error);
      })
  }

}
