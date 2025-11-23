import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pelicula {
  id: number;
  title: string;
  name?: string;
  overview: string;
  poster_path: string | null;
  release_date?: string;
  first_air_date?: string;
  vote_average?: number;
}

export interface RespuestaPeliculas {
  page: number;
  results: Pelicula[];
  total_pages: number;
  total_results: number;
}

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getMoviesList(type: 'popular' | 'top_rated' | 'upcoming' = 'popular', page = 1): Observable<RespuestaPeliculas> {
    const endpoint = `${this.apiUrl}/movie/${type}`;
    const params = new HttpParams().set('page', page.toString());
    return this.http.get<RespuestaPeliculas>(endpoint, { params });
  }

  getMovieDetail(id: number) {
    return this.http.get<any>(`${this.apiUrl}/movie/${id}`);
  }

  searchMovies(query: string, page = 1) {
    const params = new HttpParams().set('query', query).set('page', page.toString());
    return this.http.get<RespuestaPeliculas>(`${this.apiUrl}/search/movie`, { params });
  }

  searchTV(query: string, page = 1) {
    const params = new HttpParams().set('query', query).set('page', page.toString());
    return this.http.get<any>(`${this.apiUrl}/search/tv`, { params });
  }
}
