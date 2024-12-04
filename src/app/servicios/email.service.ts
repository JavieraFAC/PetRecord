import { Injectable } from '@angular/core';
import { EmailComposer } from 'capacitor-email-composer'; 


@Injectable({
  providedIn: 'root'
})
export class EmailService {


  constructor() { }
  // Método para enviar el correo
  async sendEmail(to: string, subject: string, body: string) {
    try {
      // Definimos el objeto
      const email = {
        to: [to], 
        subject: subject,
        body: body,
        isHtml: true
      };


      await EmailComposer.open(email); // Esto abrirá el cliente de correo predeterminado
      console.log("Correo enviado exitosamente");
    } catch (error) {
      console.error("Error al enviar el correo: ", error);
    }
  }
}