import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

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
  auth = inject(AngularFireAuth);

  cdr = inject(ChangeDetectorRef);


  async ngOnInit() {
    const uid = (await this.fireBS.getAuth().currentUser)?.uid;
    if (!uid) return;
  
    console.log("UID de perfil:", uid);
  
    const userData = await this.fireBS.getUserData(uid);
    console.log("Datos de usuario:", userData);
  
    if (userData) {
      // Asegúrate de que estos valores están siendo asignados correctamente
      this.nombreUsuario = `${userData['nombre']} ${userData['apellidos']}`|| 'Sin nombre'; // Aquí debería ser 'nombre' y no 'datosPersonales.nombre'
      this.run = userData['run'] || 'Sin RUN';  // Aquí debería ser 'run' y no 'datosPersonales.run'
      this.cdr.detectChanges();
    }
  }
  
}  