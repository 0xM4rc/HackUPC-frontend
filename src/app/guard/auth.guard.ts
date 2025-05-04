// src/app/guards/auth.guard.ts (Angular ≥16 con función; usa clase si es Angular <16)
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) return true;

  router.navigateByUrl('/register');
  return false;
};
