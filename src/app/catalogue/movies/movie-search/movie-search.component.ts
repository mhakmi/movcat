import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'mv-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  config;

  constructor(private _auth: AuthService) {
    this.config = {
      apiKey: environment.algolia.apiKey,
      appId: environment.algolia.appId,
      indexName: environment.algolia.indexName,
      urlSync: false,
      searchParameters: {
        facets: '*',
        facetFilters: [`UID:${this._auth.loggedUserID}`]
      },
      searchFunction: (helper) => {
        if(helper.state.query == '') { //prevent search onLoad
          return;
        }
  
        helper.search();
      }
    }
  }

  ngOnInit() {
  }

}
