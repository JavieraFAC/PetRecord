import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.page.html',
  styleUrls: ['./tutores.page.scss'],
})
export class TutoresPage implements OnInit {

  tutorFormularioAbierto = false;  
  tutores: any[] = []; 

  fireBS = inject(FirebaseService);
  cargandoS = inject(CargandoService);
  toastController = inject(ToastController);

// Formulario para gregar tutor
    form = new FormGroup({
      Tutorid: new FormControl(''),
      Tutornombre: new FormControl('',[Validators.required, Validators.minLength(2)]),
      Tutorapellidos: new FormControl('',[Validators.required, Validators.minLength(3)]),
      Tutorrun: new FormControl('',[Validators.required]),
      Tutordireccion: new FormControl(''),
      Tutorciudad: new FormControl(''),
      Tutortelefono: new FormControl('',[Validators.required]),
      Tutoremail: new FormControl('',[Validators.required, Validators.email]),
      Tutorobs: new FormControl(''),
    })

user = {} as Usuario;
 
  ngOnInit() {
    this.user = this.cargandoS.obtenerDeLocalStorage('user');

  }
// FORMULARIO 
    abrirFormulario() { this.tutorFormularioAbierto = true;}
    cerrarFormulario() { this.tutorFormularioAbierto = false; }
// ---------------------------------------------------------------------

ionViewWillEnter(){
  this.cargarTutores();
}

cargarTutores() {
  let path = `users/${this.user.uid}/tutores`; // Asegúrate de usar la misma ruta
  let sub = this.fireBS.getCollectionTutor(path).subscribe({
    next: (res: any) => {
      console.log('Tutores recuperados:', res); // Verifica que res contiene datos
      this.tutores = res; // Asigna los tutores a la variable para mostrarlos
      sub.unsubscribe(); // Cierra la suscripción
    },
    error: (error) => {
      console.error('Error al cargar tutores:', error);
      this.cargandoS.presentToast({
        message: 'Error al cargar los tutores. Intente más tarde.',
        duration: 3000,
        color: 'danger',
        position: 'middle',
      });
    }
  });
}


  guardarTutor() { }
  editarTutor() {}
  detallestutor(){ this.cargandoS.routerLink('/tutores/detalle-tutor');}


  //--- guardar tutor
  async submit() {
    if (this.form.valid) {
      let path = `users/${this.user.uid}/tutores`; // Ruta consistente
      const loading = await this.cargandoS.cargando();
      await loading.present();
  
      delete this.form.value.Tutorid; // Elimina el ID antes de guardar
  
      this.fireBS.addTutor(path, this.form.value).then(async (res) => {
        console.log('Tutor agregado:', res); // Verificar el resultado
        this.cargandoS.presentToast({
          message: 'Tutor agregado correctamente',
          duration: 1500,
          color: 'success',
          position: 'middle',
        });
        this.cargarTutores(); // Recargar tutores después de agregar uno nuevo
      }).catch((error) => {
        this.cargandoS.presentToast({
          message: 'Por favor, completa todos los datos',
          duration: 3000,
          color: 'danger',
          position: 'middle',
        });
      }).finally(() => loading.dismiss());
    }
  }
}