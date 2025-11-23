import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  query = '';
  type: 'movie' | 'tv' = 'movie';
  results: any[] = [];
  loading = false;
  error = '';

  constructor(private moviesService: MoviesService) {}

  search(): void {
    if (!this.query.trim()) return;
    this.loading = true;
    this.error = '';
    this.results = [];

    if (this.type === 'movie') {
      this.moviesService.searchMovies(this.query).subscribe({
        next: (res) => { this.results = res.results; this.loading = false; },
        error: (err) => { console.error(err); this.error = 'Error en búsqueda'; this.loading = false; }
      });
    } else {
      this.moviesService.searchTV(this.query).subscribe({
        next: (res) => { this.results = res.results; this.loading = false; },
        error: (err) => { console.error(err); this.error = 'Error en búsqueda'; this.loading = false; }
      });
    }
  }
}
