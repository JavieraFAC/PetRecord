import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CargandoService {

cargandoC = inject(LoadingController);
toastC = inject(ToastController);
router = inject(Router);
loadingController = inject(LoadingController);


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


async tomarFoto(promptLabelHeader: string){
  return await Camera.getPhoto({
    quality:90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Prompt, //desde donde se toma la foto , galeria o camara
    promptLabelHeader,
    promptLabelPhoto: 'Selecciona una imagen',
    promptLabelPicture: 'Toma una foto',
  })

}
// ----------------------------------------------------------

}
