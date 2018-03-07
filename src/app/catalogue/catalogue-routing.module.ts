import { MovieSearchComponent } from './movies/movie-search/movie-search.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { IndexComponent } from './index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '', redirectTo: 'movies', pathMatch: 'full'
      },
      {
        path: 'movies', component: MoviesListComponent
      },
      {
        path: 'movie/add', component: MovieAddComponent
      },
      {
        path: 'movie/search', component: MovieSearchComponent
      },
      {
        path: '**', redirectTo: 'movies', pathMatch: 'full' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
