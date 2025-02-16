import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Injectando o serviço de autenticação
  const router = inject(Router); // Injectando o router para redirecionar

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']); // Redireciona para a página de login se não autenticado
    return false;
  }
};
