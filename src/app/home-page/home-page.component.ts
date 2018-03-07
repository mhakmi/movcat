import { Observable } from 'rxjs/Observable';
import { AuthService } from './../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '@firebase/auth-types';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isAuth: Observable<boolean>;
  constructor(public _authSrv: AuthService) {
    
  }

  ngOnInit() {
    this.isAuth = this._authSrv.isAuthenticated;
  }

}
