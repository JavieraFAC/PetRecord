import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olvidocontrasena',
  templateUrl: './olvidocontrasena.page.html',
  styleUrls: ['./olvidocontrasena.page.scss'],
})
export class OlvidocontrasenaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  opcionSeleccionada: string = 'telefono';  
  telefono: string = '';
  correo: string = '';


  // Validar teléfono chileno
  isPhoneValid(): boolean {
    const phoneRegex = /^9[0-9]{8}$/;  // teléfonos de Chile
    return phoneRegex.test(this.telefono);
  }

  // Validar que el correo sea válido
  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // validar correo 
    return emailRegex.test(this.correo);
  }

  // Enviar mensaje de recuperación por teléfono
  enviarMensaje() {
    if (this.isPhoneValid()) {
      console.log('Enviando mensaje de recuperación al teléfono...');
      // Lógica para enviar el mensaje
    } else {
      console.log('Número de teléfono no válido');
    }
  }

  // Enviar mensaje de recuperación por correo
  enviarMensajeCorreo() {
    if (this.isEmailValid()) {
      console.log('Enviando mensaje de recuperación al correo...');
      // Lógica para enviar el mensaje
    } else {
      console.log('Correo electrónico no válido');
    }
  }

}

