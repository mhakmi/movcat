import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ct-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  sidebarItems: NbMenuItem[];

  constructor() { }

  ngOnInit() {
    this.sidebarItems = [
      {
        title: 'Home', 
        icon: 'fa fa-home',
        link: '/catalogue/movies',
        home: true
      },
      {
        title: 'My Collection',
        group: true
      },
      {
        title: 'Add New Movie', 
        icon: 'fa fa-plus',
        link: '/catalogue/movie/add'
      },
      {
        title: 'Search', 
        icon: 'fa fa-search',
        link: '/catalogue/movie/search'
      }
    ]
  }

}
