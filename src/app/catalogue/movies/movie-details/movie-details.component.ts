import { ToasterService } from 'angular2-toaster';
import { MovieService } from './../shared/movie.service';
import { Movie } from './../shared/movie';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mv-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: any;

  editMode: boolean = false;

  editForm: FormGroup;

  constructor(private _movieSrv: MovieService,
              private _toastSrv: ToasterService,
              private fromBldr: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.fromBldr.group({
      title: this.movie.title,
      plot: this.movie.plot,
      genres: [this.movie.genre],
      actors: [this.movie.actors],
      year: this.movie.year,
    })
  }

  toggleEditMode() {
    this.editMode = this.editMode? false : true;
  }

  editMovie() {
    let frmValues = this.editForm.value;

    let movie = {
      title: frmValues.title,
      plot: frmValues.plot,
      genre: frmValues.genres,
      actors: frmValues.actors,
      addedAt: this.movie.addedAt,
      key: this.movie.key || this.movie.objectID
    };

    this._movieSrv.updateMovie(movie)
      .then(() => {
        this._toastSrv.pop('success', 'Edit Movie Success');
      })
      .catch((error) => {
        this._toastSrv.pop('error', 'Edit Movie Faild', error);
      })

    this.toggleEditMode();
  }

  cancel() {
    this.editForm.reset({
      title: this.movie.title,
      plot: this.movie.plot,
      genres: this.movie.genre,
      actors: this.movie.actors,
    });
    
    this.toggleEditMode();
  }

  deleteMovie(movieKey: string) {
    let confirm = window.confirm('Do you want to delete this movie?');
    if(confirm)
      this._movieSrv.deleteMovie(movieKey);
  }

}
