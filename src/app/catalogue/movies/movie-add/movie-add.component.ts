import { ToasterService } from 'angular2-toaster';
import { MovieService } from './../shared/movie.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Movie } from './../shared/movie';
import { Component, OnInit } from '@angular/core';
import { OmdbApiService } from '../shared/omdb-api.service';

@Component({
  selector: 'mv-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  movie: Movie = new Movie();

  addForm: FormGroup;

  constructor(private _omdbSrv: OmdbApiService,
              private _movieSrv: MovieService,
              private _toastSrv: ToasterService,
              private _frmBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this._frmBuilder.group({
      title: this.movie.title,
      plot: this.movie.plot,
      actors: this.movie.actors,
      genre: this.movie.genre,
      year: this.movie.year
    })
  }

  addMovie() {
    let frmValues = this.addForm.value;

    let movie: Movie = {
      title: frmValues.title,
      plot: frmValues.plot,
      actors: frmValues.actors,
      genre: frmValues.genre,
      year: frmValues.year,
      addedAt: Date.now()
    }

    this._movieSrv.addMovie(movie)
      .then((ref) => {
        if(ref) {
          this._toastSrv.pop('success', 'Movie Added Successfuly')
        }
      },
      (error) => {
        this._toastSrv.pop('error', 'Adding Movie Failed', error)
        console.log(error)
      })

    this.frmReset();
  }

  frmReset() {
    this.addForm.reset({
      title: this.movie.title,
      plot: this.movie.plot,
      actors: this.movie.actors,
      genre: this.movie.genre,
      year: this.movie.year
    })
  }

}
