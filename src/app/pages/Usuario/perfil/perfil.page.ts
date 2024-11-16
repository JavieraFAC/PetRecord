import { Component, inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombre: string = '';
  apellidos: string = '';
  run: string = '';


  fireBS = inject(FirebaseService);
  cargandoS = inject(CargandoService);
  auth = inject(AngularFireAuth);


  ngOnInit() {    this.auth.currentUser.then(user => {
    if (user) {
      // Llamamos a la función para obtener los datos del usuario desde Firestore
      this.fireBS.getUserData(user.uid).then(data => {
        if (data) {
          this.nombre = data['nombre'] || '';
          this.run = data['run'] || '';
          this.apellidos = data['apellidos'];
        }
      });
    }
  });
}
}