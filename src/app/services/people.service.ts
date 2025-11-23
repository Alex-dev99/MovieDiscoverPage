import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  id: number;
  name: string;
  profile_path?: string | null;
  known_for?: any[];
}

export interface RespuestaPeople {
  page: number;
  results: Person[];
  total_pages: number;
  total_results: number;
}

@Injectable({ providedIn: 'root' })
export class PeopleService {
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularPeople(page = 1): Observable<RespuestaPeople> {
    const params = new HttpParams().set('page', page.toString());
    return this.http.get<RespuestaPeople>(`${this.apiUrl}/person/popular`, { params });
  }

  getPersonDetail(id: number) {
    return this.http.get<any>(`${this.apiUrl}/person/${id}`);
  }
}
