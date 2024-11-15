import { Component, inject } from '@angular/core';
import { FirebaseService } from './servicios/firebase.service';
import { CargandoService } from './servicios/cargando.service';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  fireBS = inject(FirebaseService);
  cargandoS = inject(CargandoService);
  alertController = inject(AlertController);
  router = inject(Router);
  platform = inject(Platform)

 // --------------------------------------------------------------
  // Alerta de ayuda
  async showHelpAlert() {
    const alert = await this.alertController.create({
      header: 'Centro de Ayuda',
      message: 'Para consultas, contáctanos por correo o WhatsApp.',
      buttons: [
        {
          text: 'Enviar Correo',
          handler: () => {
            window.open('mailto:ja.alvarezc@duocuc.cl');
          }
        },
        {
          text: 'WhatsApp',
          handler: () => {
            window.open('https://wa.me/56984048112');
          }
        },
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  // Alerta de cierre de sesión
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      message: 'Saldrás de tu perfil',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Alerta cancelada');
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.fireBS.signOut();
          }
        }
      ]
    });

    await alert.present();
  }
}

