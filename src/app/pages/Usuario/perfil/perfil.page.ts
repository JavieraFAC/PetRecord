import { Component, inject, OnInit } from '@angular/core';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  fireBS = inject(FirebaseService);
  cargandoS = inject(CargandoService);

  ngOnInit() {
  }

}
