import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateFn, ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree, GuardResult, MaybeAsync} from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../servicios/firebase.service';
import { CargandoService } from '../servicios/cargando.service';



@Injectable({
  providedIn: 'root'
})

export class noAuthGuard implements CanActivate{

  fireBS = inject(FirebaseService);
  cargandoS = inject(CargandoService);

  canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    return  new Promise((resolve) => {

            this.fireBS.getAuth().onAuthStateChanged((auth) => {

              if(!auth) resolve(true);
              else{
                this.cargandoS.routerLink('/perfil');
                resolve(false);
              }
            })
          });
    
  }
  
}




