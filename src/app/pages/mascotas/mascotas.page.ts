import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { DblocalService } from 'src/app/services/dblocal.service';
import { Itutores } from 'src/app/interfaces/Itutores';
import { Imascota } from 'src/app/interfaces/Imascota';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.page.html',
  styleUrls: ['./mascotas.page.scss'],
})
export class MascotasPage implements OnInit {

  tutor!: Itutores; 
  mascotas: Imascota[] = [];
  
  nuevaMascota: Imascota = {
    Nombre: '',
    Especie: '',
    Raza: '',
    Edad: 0,
    TutorRun: 0
  };

  constructor(private dblocalService: DblocalService, private router: Router) {}

  ngOnInit() {


  }

  async cargarMascotas() {

  }

  agregarMascota(){
    
  }


  
}
