// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <header class="top-nav">
      <div class="nav-contenedor">
        <a class="brand" routerLink="/movies">MovieApp</a>
        <nav>
          <a routerLink="/movies" routerLinkActive="activo">Películas</a>
          <a routerLink="/people" routerLinkActive="activo">Actores</a>
          <a routerLink="/search" routerLinkActive="activo">Buscar</a>
        </nav>
      </div>
    </header>

    <main class="main-contenedor">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `:host { display:block; font-family: Arial, Helvetica, sans-serif; }
    .top-nav { background:#222; color:#fff; padding:10px 0; }
    .nav-contenedor { width:95%; max-width:1100px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; }
    .nav-contenedor nav a { color:#ddd; margin-left:16px; text-decoration:none; }
    .nav-contenedor nav a.activo, .nav-contenedor nav a:hover { color:#fff; }
    .brand { font-weight:700; color:#fff; text-decoration:none; }
    .main-contenedor { padding:20px; width:95%; max-width:1100px; margin:16px auto; }
    `
  ]
})
export class App {
  titulo = 'app-descubrir-peliculas';
}