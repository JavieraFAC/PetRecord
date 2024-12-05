import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { CargandoService } from 'src/app/servicios/cargando.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {


  nombreUsuario: string = '';
  apellidos: string = '';
  run: string = '';

  fireBS = inject(FirebaseService);
  cargandoS = inject(CargandoService);
  cdr = inject(ChangeDetectorRef);

  imagenPerfil: string | null = null;

  async ngOnInit() {
    const uid = (await this.fireBS.getAuth().currentUser)?.uid;
    if (!uid) return;

    console.log("UID de perfil:", uid);

    const userData = await this.fireBS.getUserData(uid);
    console.log("Datos de usuario:", userData);

    if (userData) {
      this.nombreUsuario = `${userData['nombre']} ${userData['apellidos']}` || 'Sin nombre';
      this.run = userData['run'] || 'Sin RUN';
      

        // Recuperar la imagen guardada desde localStorage
        this.cargarImagenPerfil(); 
    }
  }



  ionViewWillEnter() {
    // Cuando se va a mostrar la página, cargar la imagen
    this.cargarImagenPerfil();
  }

  private cargarImagenPerfil() {
    // Leer la imagen desde localStorage
    const imagenGuardada = localStorage.getItem('imagenPerfil');
    if (imagenGuardada) {
      this.imagenPerfil = imagenGuardada;
    } else {
      console.log('No se encontró imagen guardada en localStorage');
    }
  }
}

