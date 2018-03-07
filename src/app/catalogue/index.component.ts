import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-index',
  template: `
    <ct-main>
      <router-outlet></router-outlet>
    </ct-main>
  `,
  styles: []
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
