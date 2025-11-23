import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Genero {
  id: number;
  name: string;
}

export interface RespuestaGeneros {
  genres: Genero[];
}

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  obtenerGenerosPeliculas(): Observable<RespuestaGeneros> {
    return this.http.get<RespuestaGeneros>(`${this.apiUrl}/genre/movie/list`);
  }
}