import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'mv-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  config = {
    apiKey: 'f02ea4832f6a11fe872e633f4445d6a4',
    appId: 'HRD8BPHTMH',
    indexName: 'dev_movcat',
    urlSync: false,
    searchParameters: {
      facets: '*',
      facetFilters: ['UID:zntj76yXkkSdJd06GZ9TeK3Q2S53']
    },
    searchFunction: (helper) => {
      if(helper.state.query == '') {
        return;
      }

      helper.search();
    }
  }

  constructor() { }

  fn(helper) {
    console.log('helper', helper)
  }

  ngOnInit() {

  }

}
