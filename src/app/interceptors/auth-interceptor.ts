import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const peticionConAuth = req.clone({
    setHeaders: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTMyN2NmYWZmNGYxZWMzZTc2YjQwOGY2NjZhZTZjNiIsIm5iZiI6MTc2MzM2Nzc2NS40MDQsInN1YiI6IjY5MWFkYjU1MjE4MTBlZTc2YTE3NWQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1r4iV_ii3HDaBU-ly5c8ao_gGMt6KZ-7gDwE-GJGB4I`,
      'Accept': 'application/json'
    }
  });

  return next(peticionConAuth);
};