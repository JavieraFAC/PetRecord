import { Component, inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-datosprofesionales',
  templateUrl: './datosprofesionales.page.html',
  styleUrls: ['./datosprofesionales.page.scss'],
})
export class DatosprofesionalesPage implements OnInit {

  fireBS = inject(FirebaseService);
  cargandoS = inject(CargandoService);
  auth = inject(AngularFireAuth);
  toastController = inject(ToastController);

  form: FormGroup;


  ngOnInit() {this.form = new FormGroup({
    universidad: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required]),
    especialidad: new FormControl('', [Validators.required]),
    anoTitulacion: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
  });

  this.cargarDatosProfesionales();
}

async cargarDatosProfesionales() {
  const uid = (await this.fireBS.getAuth().currentUser)?.uid;
  if (!uid) return;

  const userData = await this.fireBS.getUserData(uid);
  if (userData && userData['datosProfesionales']) {
    this.form.patchValue(userData['datosProfesionales']);
  }
}

async guardarDatosProfesionales() {
  if (this.form.valid) {
    const uid = (await this.fireBS.getAuth().currentUser)?.uid;
    if (!uid) return;

    const cargando = await this.cargandoS.cargando();
    await cargando.present();

    const datosProfesionales = this.form.value;

    try {
      await this.fireBS.setDocument(`users/${uid}`, {
        datosProfesionales,
      });
      this.cargandoS.presentToast({
        message: '¡Datos profesionales guardados con éxito!',
        duration: 2000,
        color: 'success',
      });
    } catch (error) {
      this.cargandoS.presentToast({
        message: 'Error al guardar los datos. Intenta nuevamente.',
        duration: 2000,
        color: 'danger',
      });
    } finally {
      cargando.dismiss();
    }
  }
}
}