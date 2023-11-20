// src/app/shared/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      // Si el usuario está autenticado, permite el acceso a la ruta
      return true;
    } else {
      // Si el usuario no está autenticado, redirige al componente de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
}
