import { Component, inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-detalle-tutor',
  templateUrl: './detalle-tutor.page.html',
  styleUrls: ['./detalle-tutor.page.scss'],
})
export class DetalleTutorPage implements OnInit {

  tutor: any;
  tutorData: any;
  tutorId: string | null = null;

  fireBS = inject(FirebaseService);
  cargandoS = inject(CargandoService);
  auth = inject(AngularFireAuth);
  toastController = inject(ToastController);
  route = inject(ActivatedRoute);


  ngOnInit() {
    const tutorId = this.route.snapshot.paramMap.get('id');
    if (tutorId) {
      this.fireBS.obtenerTutorPorId(tutorId).then(data => {
        this.tutor = data;
        console.log('Datos del tutor:', this.tutor);
      }).catch(error => {
        console.error('Error al obtener el tutor:', error);
      });
    }
  }

  // Función para obtener los datos del tutor
  async obtenerTutor(tutorId: string) {
    const tutorData = await this.fireBS.obtenerTutorPorId(tutorId);
    if (tutorData) {
      console.log('Datos del tutor:', tutorData);
      // Asigna los datos a tu modelo o propiedad
    } else {
      console.log('No se encontraron datos para este tutor.');
    }
  }
  



  

  cargarDatosTutor() {

  }

  actualizarDatosTutor() {

  }

  
}
