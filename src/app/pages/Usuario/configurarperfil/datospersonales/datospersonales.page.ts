import { Component, inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.page.html',
  styleUrls: ['./datospersonales.page.scss'],
})
export class DatospersonalesPage implements OnInit {

  fireBS = inject(FirebaseService);
  cargandoS = inject(CargandoService);
  auth = inject(AngularFireAuth);
  toastController = inject(ToastController);

  form: FormGroup;

  ngOnInit() {
    this.inicializarFormulario();
    this.cargarDatosUsuario();
  }

  inicializarFormulario() {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      run: new FormControl({ value: '', disabled: true }), // RUN no editable
      telefono: new FormControl('', [Validators.required]),
      domicilio: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.required]),
    });
  }

  async cargarDatosUsuario() {
    const uid = await this.fireBS.getUserUID();
    const path = `users/${uid}`;

    this.fireBS.getDocument(path).then((data) => {
      if (data) {
        this.form.patchValue(data); // Carga los datos en el formulario
      }
    }).catch((error) => {
      this.mostrarToast('Error al cargar los datos.', 'danger');
    });
  }

  async actualizarDatos() {
    if (this.form.valid) {
      const uid = await this.fireBS.getUserUID();
      const path = `users/${uid}`;
      const datosActualizados = this.form.getRawValue(); // Obtiene todos los campos, incluyendo los deshabilitados

      this.fireBS.updateDocument(path, datosActualizados).then(() => {
        this.mostrarToast('Datos actualizados con éxito', 'success');
      }).catch((error) => {
        this.mostrarToast('Error al actualizar los datos.', 'danger');
      });
    } else {
      this.mostrarToast('Por favor, completa todos los campos correctamente.', 'danger');
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