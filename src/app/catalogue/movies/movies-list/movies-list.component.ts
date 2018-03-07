import { Observable } from 'rxjs';
import { MovieService } from './../shared/movie.service';
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../shared/movie';

@Component({
  selector: 'mv-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input() list?: Movie[];
  
  moviesList: Observable<Movie[]> | Movie[];

  itemToEdit: number;
  
  constructor(private _MovieSrv: MovieService) { }

  ngOnInit() {
    if(this.list) {
      this.moviesList = Observable.of(this.list)
    } else {
      this.moviesList = this._MovieSrv.getMoviesList();
    }
  }

  edite(id: number) {
    this.itemToEdit = this.itemToEdit? null : id;
  }

}
