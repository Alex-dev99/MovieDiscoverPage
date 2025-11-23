import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '/movies', renderMode: RenderMode.Prerender },
  { path: '/people', renderMode: RenderMode.Prerender },
  { path: '/search', renderMode: RenderMode.Prerender },
  { path: '/movies/:id', renderMode: RenderMode.Prerender },
  { path: '/people/:id', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender }
];
