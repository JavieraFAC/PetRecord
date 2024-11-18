import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-datosatencion',
  templateUrl: './datosatencion.page.html',
  styleUrls: ['./datosatencion.page.scss'],
})
export class DatosatencionPage implements OnInit {

  especies: any[] = []; // Almacenará las especies desde Firebase
  muestras: any[] = []; // Almacena las muestras desde Firebase
  examenes: any[] = [];

  fireBS = inject(FirebaseService);
  toastController = inject(ToastController);
  router = inject(Router);

  async ngOnInit() {
    this.especies = await this.fireBS.getEspecies();     // Cargar especies desde Firebase
    this.muestras = await this.fireBS.getMuestras();     // Cargar muestras médicas desde Firebase
    this.examenes = await this.fireBS.getExamenes();

    // Obtener datos del usuario
    const uid = (await this.fireBS.getAuth().currentUser)?.uid;
    if (uid) {
      const userData = await this.fireBS.getUserData(uid);
      const especiesAtendidas = userData?.['especiesAtendidas'] || [];
      const muestrasMedicas = userData?.['muestrasMedicas'] || [];
      const examenesMedicos = userData?.['examenesMedicos'] || [];

      // Marcar como seleccionadas las especies y muestras que ya atendió el usuario
      this.especies.forEach(especie => {
        especie.checked = especiesAtendidas.includes(especie.id);
      });

      this.muestras.forEach(muestra => {
        muestra.checked = muestrasMedicas.includes(muestra.id);
      });

      this.examenes.forEach(examen => {
        examen.checked = examenesMedicos.includes(examen.id);

      })

      console.log('Especies después de marcar como seleccionadas:', this.especies); // Asegúrate de que los valores `checked` estén correctos
      console.log('Muestras después de marcar como seleccionadas:', this.muestras);
      console.log('Examenes después de marcar como seleccionadas:', this.examenes);
    }
  }

  // Método para guardar especies
  async guardarEspecies() {
    // Filtrar especies seleccionadas
    const especiesSeleccionadas = this.especies.filter(especie => especie.checked);
    console.log('Especies seleccionadas antes de guardar:', especiesSeleccionadas); // Debug

    if (especiesSeleccionadas.length === 0) {
      // Mostrar mensaje si no se ha seleccionado ninguna especie
      const toast = await this.toastController.create({
        message: 'Debe seleccionar al menos una especie.',
        duration: 2000,
        color: 'warning',
      });
      await toast.present();
      return; // No guardamos nada si no hay especies seleccionadas
    }

    const uid = await this.fireBS.getUserUID();

    // Guardar en Firebase
    await this.fireBS.updateDocument(`users/${uid}`, {
      especiesAtendidas: especiesSeleccionadas.map(e => e.id),
    });

    // Mostrar toast de confirmación
    const toast = await this.toastController.create({
      message: '¡Especies guardadas correctamente!',
      duration: 2000,
      color: 'success',
    });
    await toast.present();
  }

  // Método para guardar muestras
  async guardarMuestras() {
    // Filtrar muestras seleccionadas
    const muestrasSeleccionadas = this.muestras.filter(muestra => muestra.checked);
    console.log('Muestras seleccionadas antes de guardar:', muestrasSeleccionadas); // Debug

    if (muestrasSeleccionadas.length === 0) {
      // Mostrar mensaje si no se ha seleccionado ninguna muestra
      const toast = await this.toastController.create({
        message: 'Debe seleccionar al menos una muestra.',
        duration: 2000,
        color: 'warning',
      });
      await toast.present();
      return; // No guardamos nada si no hay muestras seleccionadas
    }

    const uid = await this.fireBS.getUserUID();

    // Guardar en Firebase
    await this.fireBS.updateDocument(`users/${uid}`, {
      muestrasMedicas: muestrasSeleccionadas.map(m => m.id),
    });

    // Mostrar toast de confirmación
    const toast = await this.toastController.create({
      message: '¡Muestras guardadas correctamente!',
      duration: 2000,
      color: 'success',
    });
    await toast.present();
  }



  // Método para guardar exámenes
  async guardarExamenes() {
    // Filtrar exámenes seleccionados
    const examenesSeleccionados = this.examenes.filter(examen => examen.checked);
    console.log('Exámenes seleccionados antes de guardar:', examenesSeleccionados); // Debug

    if (examenesSeleccionados.length === 0) {
      // Mostrar mensaje si no se ha seleccionado ningún examen
      const toast = await this.toastController.create({
        message: 'Debe seleccionar al menos un examen.',
        duration: 2000,
        color: 'warning',
      });
      await toast.present();
      return; // No guardamos nada si no hay exámenes seleccionados
    }

    const uid = await this.fireBS.getUserUID();

    // Guardar en Firebase
    await this.fireBS.updateDocument(`users/${uid}`, {
      examenesMedicos: examenesSeleccionados.map(e => e.id),
    });

    // Mostrar toast de confirmación
    const toast = await this.toastController.create({
      message: '¡Exámenes guardados correctamente!',
      duration: 2000,
      color: 'success',
    });
    await toast.present();
  }

}
