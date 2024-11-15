import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateFn, ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree, GuardResult, MaybeAsync} from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/services/firebase.service';
import { CargandoService } from 'src/services/cargando/cargando.service';


@Injectable({
  providedIn: 'root'
})

export class noAuthGuard implements CanActivate{

  firebaseS = inject(FirebaseService);
  cargandoS = inject(CargandoService);

  canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    return  new Promise((resolve) => {

            this.firebaseS.getAuth().onAuthStateChanged((auth) => {

              if(!auth) resolve(true);
              else{
                this.cargandoS.routerLink('/perfil');
                resolve(false);
              }
            })
          });
    
  }
  
}




