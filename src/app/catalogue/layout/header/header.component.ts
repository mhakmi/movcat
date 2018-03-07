import { AuthService } from './../../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { User } from '@firebase/auth-types';

@Component({
  selector: 'ct-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private _sidebarSrv: NbSidebarService, private _authSrv: AuthService) { }

  ngOnInit() {
    this.user = this._authSrv.loggedUser;
  }

  toggleSidebar() {
    this._sidebarSrv.toggle(true, 'cat-sidebar')
  }

  signOut() {
    this._authSrv.signOut();
  }

}
