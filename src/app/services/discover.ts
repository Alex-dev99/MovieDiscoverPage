import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pelicula {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface RespuestaPeliculas {
  page: number;
  results: Pelicula[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  descubrirPeliculas(generoId: number): Observable<RespuestaPeliculas> {
    const parametros = new HttpParams()
      .set('with_genres', generoId.toString())
      .set('sort_by', 'popularity.desc');

    return this.http.get<RespuestaPeliculas>(`${this.apiUrl}/discover/movie`, { params: parametros });
  }
}