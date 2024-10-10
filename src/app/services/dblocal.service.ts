import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { Itutores } from '../interfaces/Itutores';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DblocalService {

  tutores: Itutores[] = [];
  private _storage: Storage | null=null;

  constructor( private storage:Storage, private toastController:ToastController) { 

    this.Init();
    this.cargarTutores();
  }

  async Init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }
  async cargarTutores(){
    const misTutores = await this.storage.get('tutores');
    if(misTutores)
    {
      this.tutores=misTutores;
    }

  }
  guardarTutores(nombre: string, apellidos: string, run: number, direccion: string, telefono: number, correo: string) {
    const existe = this.tutores.find(c => c.Run == run);
    
    if (!existe) {
      this.tutores.unshift({
        Nombre: nombre,
        Apellidos: apellidos,
        Run: run,
        Direccion: direccion,
        Telefono: telefono,
        Correo: correo,
        Mascotas: []
      });
  
      // Guardar en almacenamiento local
      this._storage?.set('tutores', this.tutores);
      const mensajeAgregado = `El tutor ha sido agregado`;
      this.presentToast(mensajeAgregado);
    } else {
      const mensajeExiste = `El tutor ${existe.Nombre} ya existe con el (RUN: ${existe.Run})`;
      this.presentToast(mensajeExiste);
    }
  }

  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }
  async mostrarBD(){
    return this.tutores;
  }

// -----------------------MASCOTAS-----------------------

guardarMascota(){

}

  
}



