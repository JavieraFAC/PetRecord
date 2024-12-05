import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { ToastController } from '@ionic/angular';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-configurarperfil',
  templateUrl: './configurarperfil.page.html',
  styleUrls: ['./configurarperfil.page.scss'],
})
export class ConfigurarperfilPage implements OnInit {

  fireBS = inject(FirebaseService);
  cargandoS = inject(CargandoService);
  toastController = inject(ToastController);
  cdr = inject(ChangeDetectorRef);  // Inyectar ChangeDetectorRef

  // imagen de perfil como form
  form = new FormGroup({
    imagenPerfil: new FormControl('', [Validators.required]),
  });

  imagenGuardada: string | null = null;

  ngOnInit() {
    // Cargar la imagen guardada desde localStorage
    const imagenGuardada = localStorage.getItem('imagenPerfil');
    if (imagenGuardada) {
      this.imagenGuardada = imagenGuardada;
      this.form.controls['imagenPerfil'].setValue(imagenGuardada);
    } else {
      console.log('No hay imagen guardada en localStorage');
    }
  }

  // Función para capturar imagen
  async tomarImagen() {
    try {
      const foto = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 90,
      });

      const imageUrl = foto.dataUrl;
      const imagenPerfil = 'imagenPerfil_' + new Date().getTime();
      await this.guardarImagenLocal(imageUrl, imagenPerfil);

      // Guardar la URL de la imagen en el formulario
      this.form.controls['imagenPerfil'].setValue(imageUrl);
      this.imagenGuardada = imageUrl;

      // Forzar la detección de cambios para actualizar la vista
      this.cdr.detectChanges();  // Detecta los cambios en el DOM
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  // Función para guardar la imagen localmente
  async guardarImagenLocal(dataUrl: string, nombreArchivo: string) {
    try {
      const base64Data = dataUrl.split(',')[1];
      const byteArray = this.convertBase64ToArrayBuffer(base64Data);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });

      const path = `imagenPerfil/${nombreArchivo}.jpg`;
      await Filesystem.writeFile({
        path: path,
        data: blob,
        directory: Directory.Data,
      });

      console.log('Imagen guardada localmente en:', path);
      this.mostrarToast('Imagen seleccionada', 'success');
    } catch (error) {
      console.error('Error al guardar la imagen localmente:', error);
      this.mostrarToast('Problemas de conexión al guardar', 'danger');
    }
  }

  // Función auxiliar para convertir base64 a ArrayBuffer
  convertBase64ToArrayBuffer(base64: string): ArrayBuffer {
    const binaryString = window.atob(base64);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
  }

  // Método guardarCambios() que puedes utilizar para guardar los cambios del perfil
  async guardarCambios() {
    if (this.form.valid) {
      const imagenUrl = this.form.controls['imagenPerfil'].value;
  
      try {
        // Guardar la URL de la imagen en localStorage
        localStorage.setItem('imagenPerfil', imagenUrl);
        this.mostrarToast('Imagen actualizada correctamente', 'success');
        
        // Forzar la detección de cambios para actualizar la vista
        this.cdr.detectChanges();  // Detecta los cambios en el DOM

      } catch (error) {
        console.error('Error al guardar los cambios:', error);
        this.mostrarToast('Error al intentar actualizar la imagen :(', 'danger');
      }
    } else {
      this.mostrarToast('Por favor, ingresa los campos obligatorios', 'danger');
    }
  }
  
  private async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color,
    });
    toast.present();
  }
}
