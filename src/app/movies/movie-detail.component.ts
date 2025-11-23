import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any = null;
  loading = false;
  error = '';

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadDetail(id);
    }
  }

  loadDetail(id: number) {
    this.loading = true;
    this.moviesService.getMovieDetail(id).subscribe({
      next: (res) => {
        this.movie = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error al cargar detalle de la película';
        this.loading = false;
      }
    });
  }
}
