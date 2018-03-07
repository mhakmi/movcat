import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
  NbMenuModule,
  NbSidebarService,
  NbMenuService,
  NbUserModule,
  NbTabsetModule,
  NbActionsModule
} from '@nebular/theme';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { IndexComponent } from './index.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieService } from './movies/shared/movie.service';
import { TagInputModule } from 'ngx-chips';

import { NgAisModule } from 'angular-instantsearch';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { OmdbApiService } from './movies/shared/omdb-api.service';
import { OmdbMovieDetailsComponent } from './movies/omdb-movie/omdb-movie-details/omdb-movie-details.component';
import { OmdbMovieSearchComponent } from './movies/omdb-movie/omdb-movie-search/omdb-movie-search.component';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';

const themeModules = [
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbCardModule,
  NbUserModule,
  NbTabsetModule,
  NbActionsModule,
]

@NgModule({
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TagInputModule,
    NgAisModule.forRoot(), //InstantSearch Module
    NgAisModule,

    ...themeModules,

  ],
  declarations: [
    IndexComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    MoviesListComponent,
    MovieAddComponent,
    MovieDetailsComponent,
    OmdbMovieDetailsComponent,
    OmdbMovieSearchComponent,
    MovieSearchComponent
  ],
  providers: [
    NbSidebarService,
    NbMenuInternalService,
    NbMenuService,
    MovieService,
    OmdbApiService
  ]
})
export class CatalogueModule { }
