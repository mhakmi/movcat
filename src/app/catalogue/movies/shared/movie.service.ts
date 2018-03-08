import { Observable } from 'rxjs/Observable';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../../../core/services/auth/auth.service';

@Injectable()
export class MovieService {

  private basePath: string; //Firebase Database collections base path

  moviesRef: AngularFireList<Movie>; //user collection DB Reference
  deleteLogRef: AngularFireList<any>;

  /**
   * Creates an instance of MovieService.
   * @param {AngularFireDatabase} _afDb 
   * @param {AuthService} _auth 
   * @memberof MovieService
   */
  constructor(private _afDb: AngularFireDatabase, private _auth: AuthService) {
    this.basePath = `/collections/${this._auth.loggedUserID}`; //set basePath to point user's collection
    this.moviesRef = this._afDb.list(this.basePath); //initiate DB reference
    this.deleteLogRef = this._afDb.list('/deleteLog');
  }

  /**
   * get currently logged user movies list
   * 
   * @returns {Observable<Movie[]>} 
   * @memberof MovieService
   */
  getMoviesList(): Observable<Movie[]> {
    return this.moviesRef.snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      })
  }

  /**
   * returns movie object by key
   * 
   * @param {string} key 
   * @returns {Observable<Movie>} 
   * @memberof MovieService
   */
  getMovie(key: string): Observable<Movie> {
    let moviePath = `${this.basePath}/${key}`;

    return this._afDb.object<Movie>(moviePath).valueChanges();
  }

  /**
   * Add new movie entry to user list/collection
   * 
   * @param {Movie} movie 
   * @returns 
   * @memberof MovieService
   */
  addMovie(movie: Movie) {
    return this.moviesRef.push(movie);
  }

  /**
   * Update/Edit Movie entry
   * 
   * @param {Movie} movie 
   * @returns 
   * @memberof MovieService
   */
  updateMovie(movie: Movie) {
    return this.moviesRef.update(movie.key, movie);
  }

  /**
   * Delete movie by Key,
   * log deleted movie in order to sync it with Algolia index
   * 
   * @param {string} key 
   * @returns 
   * @memberof MovieService
   */
  deleteMovie(key: string) {
    let remove = this.moviesRef.remove(key);
    remove.then(() => {
      this.deleteLogRef.push({
        collectionID: this._auth.loggedUserID,
        movieID: key
      })
    })

    return remove;
  }
}
