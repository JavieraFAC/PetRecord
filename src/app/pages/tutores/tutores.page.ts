import { Component, OnInit } from '@angular/core';
import { DblocalService } from 'src/app/services/dblocal.service';
import { Itutores } from 'src/app/interfaces/Itutores'; // Importa la interfaz aquí

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.page.html',
  styleUrls: ['./tutores.page.scss'],
})
export class TutoresPage implements OnInit {
  tutores: Itutores[] = [];
  
  nuevoTutor: Itutores = {
    Nombre: '',
    Apellidos: '',
    Run: 0,
    Direccion: '',
    Telefono: 0,
    Correo: '',
    Mascotas: []
  };

  constructor(private dblocalService: DblocalService) {}

  ngOnInit() {
    this.cargarTutores(); // Cargar tutores al iniciar la página
  }

  async cargarTutores() {
    try {
      // Cargar los tutores desde la base de datos
      this.tutores = await this.dblocalService.mostrarBD();
    } catch (error) {
      console.error('Error al cargar tutores', error);
    }
  }

  agregarTutor() {
    const { Nombre, Apellidos, Run, Direccion, Telefono } = this.nuevoTutor;
    
    // Validar solo los campos obligatorios
    if (Nombre && Apellidos && Run && Direccion && Telefono) {
      // Guardar el tutor en SQLite a través del servicio
      this.dblocalService.guardarTutores(Nombre, Apellidos, Run, Direccion, Telefono, this.nuevoTutor.Correo);

      // Limpiar el formulario
      this.nuevoTutor = {
        Nombre: '',
        Apellidos: '',
        Run: 0,
        Direccion: '',
        Telefono: 0,
        Correo: '',
        Mascotas: [],
      };

      // Refrescar la lista de tutores desde la base de datos
      this.cargarTutores();
    } else {
      alert('Por favor, complete los campos obligatorios');
    }
  }
//
//  editarTutor(tutor: Itutores) {
//    console.log('Editar tutor:', tutor);
    // abrir un modal o redirigir a otra página con el formulario de edición
//  }
}
