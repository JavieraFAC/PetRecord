import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DBloginService } from 'src/app/services/dblogin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(  private authService: DBloginService, 
                private router: Router) {}

                canActivate(): boolean {
                  if (this.authService.isLoggedIn()) {
                    return true; // Permitir acceso si está autenticado
                  }
              
                  // Redirigir al login si no está autenticado
                  this.router.navigate(['/home']);
                  return false;
                }
}

