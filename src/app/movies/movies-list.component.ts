import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoviesService, Pelicula } from '../services/movies.service';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Pelicula[] = [];
  selectedType: 'popular' | 'top_rated' | 'upcoming' = 'popular';
  loading = false;
  error = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.loading = true;
    this.error = '';
    this.movies = [];
    this.moviesService.getMoviesList(this.selectedType).subscribe({
      next: (res) => {
        this.movies = res.results;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error al cargar películas';
        this.loading = false;
      }
    });
  }
}
