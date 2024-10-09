import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {  
  constructor(private alertController: AlertController, private router: Router) {}

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
            window.open('https://wa.me/5491123966475');
          }
        },
        {
          text: 'Aceptar',
          role: 'cancel'
        }
      ]
    });


    await alert.present();
  }

async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      message: '¿Quieres al cerrado sesion?',
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
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }
}
