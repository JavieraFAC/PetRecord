import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Animation, AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-olvidocontrasena',
  templateUrl: './olvidocontrasena.page.html',
  styleUrls: ['./olvidocontrasena.page.scss'],
})
export class OlvidocontrasenaPage implements AfterViewInit {
  @ViewChild('card', { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    // Definimos la animación como una constante
    const cardAnimation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(2000)  // Duración de 2 segundos
      .iterations(Infinity)  // Bucle infinito
      .easing('ease-in-out')  // Movimiento suave y continuo
      .keyframes([
        { offset: 0, width: '100px' },    // Estado inicial
        { offset: 0.5, width: '300px' },  // Ancho máximo en la mitad
        { offset: 1, width: '100px' },    // Vuelve al ancho inicial
      ]);

    // Ejecutamos la animación
    cardAnimation.play();
  }

  opcionSeleccionada: string = 'telefono';  // Por defecto seleccionamos teléfono
  telefono: string = '';
  correo: string = '';


  // Validar teléfono chileno
  isPhoneValid(): boolean {
    const phoneRegex = /^9[0-9]{8}$/;  // Expresión regular para teléfonos de Chile
    return phoneRegex.test(this.telefono);
  }

  // Validar que el correo sea válido
  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expresión regular para validar correos electrónicos
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
  


