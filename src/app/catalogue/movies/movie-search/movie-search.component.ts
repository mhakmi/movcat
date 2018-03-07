import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../environments/environment';
// import instantsearch from 'instantsearch.js/es';
// import { connectSearchBox } from 'instantsearch.js/es/connectors';
// import { connectHits } from 'instantsearch.js/es/connectors';

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
      // console.log(helper)
      if(helper.state.query == '') {
        return;
      }

      helper.search();
    }
  }

  /*
  // Define how your component state will look like,
  // and intialize it with an empty hits array
  state: { hits: any[] } = { hits: [] };

   // Define SearchBox initial state
   state2: { query: string; refine: Function } = {
    query: '',
    refine() {}
  };

  search: any; */

  constructor() { }

  fn(helper) {
    console.log('helper', helper)
  }

  ngOnInit() {
    /*let searchParameters =  {
      facets: "*",
      // facetsExcludes: {
      //   UID: ['zntj76yXkkSdJd06GZ9TeK3Q2S53']
      // }
      facetFilters: ["UID:zntj76yXkkSdJd06GZ9TeK3Q2S53"],
      // filters: 'UID:zntj76yXkkSdJd06GZ9TeK3Q2S53'
      // facetsRefinements: {
      //   UID: ['zntj76yXkkSdJd06GZ9TeK3Q2S53']
      // }
    }
    let options = environment.algolia;

    options.searchParameters = searchParameters;

    this.search = instantsearch(options);
    */

    // this.search.addWidget(
    //   instantsearch.widgets.searchBox({
    //     container: '#search-box'
    //   })
    // );
 
    // // initialize hits widget
    // this.search.addWidget(
    //   instantsearch.widgets.hits({
    //     container: '#hits',
    //   })
    // );

    // Create a widget which will call `this.updateState` whenever
    // something changes on the search state itself
    /*const widget = connectHits(this.updateState);
    this.search.addWidget(widget());    

    const widget2 = connectSearchBox(this.updateState2);
    this.search.addWidget(widget2());*/
  }
/*
  updateState = (state, isFirstRendering) => {
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve().then(() => {
        this.state = state;
      });
    }

    this.state = state;
  }

  updateState2 = (state, isFirstRendering) => {
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve(null).then(() => {
        this.state2 = state;
      });
    }

    this.state2 = state;
  }

  handleChange(query) {
    this.state2.refine(query)
  }
  
  ngAfterViewInit()
  {
    this.search.start();

    setTimeout(() => {
      console.log(this.state)
    }, 2000);
    
  } */
}
