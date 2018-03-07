import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Movie } from './movie';
import { Observable } from 'rxjs';


/**
 * this service to fetch/search movies from OMDB Api,
 * to make user dinamaclly add movies to his/her collection
 * 
 * @export
 * @class OmdbApiService
 */
@Injectable()
export class OmdbApiService {

  baseApiUrl = 'http://www.omdbapi.com';
  apiKey = 'bb73917d';


  constructor(private http: HttpClient) { }

  /**
   * search movies by title, in OMDB Api and get brief movies information
   * 
   * @param {string} title 
   * @returns {Observable<any[]>} 
   * @memberof OmdbApiService
   */
  searchByTitle(title: string): Observable<any[]> {
    return this.http.get<any>(this.baseApiUrl, {
      params: {
        'apikey': this.apiKey,
        's': title,
        'type': 'movie'
      }
    }).pipe(
      catchError(() => of(({res: []}))),
      map(res => res.Search)
    )
  }


  /**
   * fetch full information of movie, by imdbID
   * 
   * @param {string} imdbID 
   * @returns {Observable<Movie>} 
   * @memberof OmdbApiService
   */
  getMovie(imdbID: string): Observable<Movie> {
    return this.http.get<any>(this.baseApiUrl, {
      params: {
        'apikey': this.apiKey,
        'i': imdbID,
        'plot': 'full'
      }
    }).pipe( //map the recived object into Movie object to add it to firebase DB
      catchError(() => of(({movie: null}))),
      map((movie) => {
        let m = new Movie();
        m.title = movie.Title;
        m.actors = (<string>movie.Actors).split(', ');
        m.genre = (<string>movie.Genre).split(', ');
        m.plot = movie.Plot;
        m.year = movie.Year;
        m.poster = movie.Poster;
        m.imdbID = imdbID;
        m.addedAt = Date.now();

        return m;
      })
    )
  }
}
