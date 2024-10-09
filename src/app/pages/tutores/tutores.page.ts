import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.page.html',
  styleUrls: ['./tutores.page.scss'],
})
export class TutoresPage {
  tutores = [
    { nombre: 'Juan', apellidos: 'Pérez', rut: '12.345.678-9',direccion:'av casa 12', telefono: '+56912345678', correo: 'juan@correo.com' }
  ];

  nuevoTutor = {
    nombre: '',
    apellidos: '',
    rut: '',
    direccion:'',
    telefono: '',
    correo: ''
  };

  constructor() {}

  agregarTutor() {
    if (this.nuevoTutor.nombre && this.nuevoTutor.apellidos && this.nuevoTutor.rut && this.nuevoTutor.telefono && this.nuevoTutor.correo) {
      this.tutores.push({ ...this.nuevoTutor });

      // Limpiar el formulario
      this.nuevoTutor = {
        nombre: '',
        apellidos: '',
        rut: '',
        direccion: '',
        telefono: '',
        correo: ''
      };
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}