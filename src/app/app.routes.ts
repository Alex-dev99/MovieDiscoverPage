// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { MovieDiscoverPageComponent } from './movie-discover-page/movie-discover-page.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieDetailComponent } from './movies/movie-detail.component';
import { PeopleListComponent } from './people/people-list.component';
import { PersonDetailComponent } from './people/person-detail.component';
import { SearchPageComponent } from './search-page/search-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'discover', component: MovieDiscoverPageComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'people', component: PeopleListComponent },
  { path: 'people/:id', component: PersonDetailComponent },
  { path: 'search', component: SearchPageComponent },
  { path: '**', redirectTo: 'movies' }
];