import { ToasterService } from 'angular2-toaster';
import { MovieService } from './../../shared/movie.service';
import { Component, OnInit } from '@angular/core';
import { OmdbApiService } from '../../shared/omdb-api.service';

@Component({
  selector: 'omdbmv-omdb-movie-search',
  templateUrl: './omdb-movie-search.component.html',
  styleUrls: ['./omdb-movie-search.component.scss']
})
export class OmdbMovieSearchComponent implements OnInit {

  term: string;
  searchResults: any[];

  constructor(private _omdbSrv: OmdbApiService,
              private _movieSrv: MovieService,
              private _toastSrv: ToasterService) { }

  ngOnInit() {
  }

  findMovie() {
    this.searchResults = [];
    this._omdbSrv.searchByTitle(this.term)
      .subscribe((results) => {
        this.searchResults = results;
      })
  }

  addMovie(imdbID: string) {
    this._omdbSrv.getMovie(imdbID)
      .subscribe((movie) => {
        this._movieSrv.addMovie(movie)
          .then((ref) => {
            this._toastSrv.pop('success', 'Movie Added Successfuly')
          },
          (error) => {
            this._toastSrv.pop('error', 'Adding Movie Failed', error)
          })
      })
  }

}
