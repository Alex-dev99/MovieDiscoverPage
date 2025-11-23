// src/app/movie-discover-page/movie-discover-page.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenresService, Genero } from '../services/genres';
import { DiscoverService, Pelicula } from '../services/discover';

@Component({
  selector: 'app-movie-discover-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-discover-page.component.html',
  styleUrls: ['./movie-discover-page.component.css']
})
export class MovieDiscoverPageComponent implements OnInit {
  generos: Genero[] = [];
  generoSeleccionadoId: number = 0;
  peliculas: Pelicula[] = [];
  cargando: boolean = false;
  error: string = '';

  constructor(
    private servicioGeneros: GenresService,
    private servicioDescubrir: DiscoverService
  ) { }

  ngOnInit(): void {
    this.cargarGeneros();
  }

  cargarGeneros(): void {
    this.servicioGeneros.obtenerGenerosPeliculas().subscribe({
      next: (respuesta) => {
        this.generos = respuesta.genres;
      },
      error: (error) => {
        this.error = 'Error al cargar los géneros de películas';
        console.error('Error cargando géneros:', error);
      }
    });
  }

  cuandoCambiaGenero(): void {
    if (this.generoSeleccionadoId) {
      this.cargarPeliculasPorGenero(this.generoSeleccionadoId);
    } else {
      this.peliculas = [];
    }
  }

  cargarPeliculasPorGenero(generoId: number): void {
    this.cargando = true;
    this.peliculas = [];
    this.error = '';

    this.servicioDescubrir.descubrirPeliculas(generoId).subscribe({
      next: (respuesta) => {
        this.peliculas = respuesta.results;
        this.cargando = false;
      },
      error: (error) => {
        this.error = 'Error al cargar las películas';
        this.cargando = false;
        console.error('Error cargando películas:', error);
      }
    });
  }

  obtenerUrlPoster(rutaPoster: string): string {
    if (rutaPoster) {
      return `https://image.tmdb.org/t/p/w500${rutaPoster}`;
    }
    return 'https://via.placeholder.com/500x750?text=Sin+Imagen';
  }
}