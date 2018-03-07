import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  tabs: any[] = [
    {
      title: 'SIGN IN',
      route: '/auth/login'
    },
    {
      title: 'SIGN UP',
      route: '/auth/signup'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
