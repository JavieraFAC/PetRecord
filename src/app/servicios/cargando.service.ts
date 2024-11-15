import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CargandoService {

cargandoC = inject(LoadingController);
toastC = inject(ToastController);
router = inject(Router);


// animación de carga de informacion
cargando(){
  return this.cargandoC.create({spinner:'crescent'})
}

async presentToast(opts?:ToastOptions){
  const toast= await this.toastC.create(opts);
  toast.present();

}

// funcion para enrutar paginas
routerLink(url:string){
  return this.router.navigateByUrl(url)
}

guardarEnLocalStorage(key: string, value: any){
  return localStorage.setItem(key, JSON.stringify(value))
}
obtenerDeLocalStorage(key:string){
  return JSON.parse(localStorage.getItem(key))
}

}
