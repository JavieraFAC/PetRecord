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
}
