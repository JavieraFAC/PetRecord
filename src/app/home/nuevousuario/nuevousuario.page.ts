import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TerminospopoverComponent } from './terminospopover/terminospopover.component';


@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.page.html',
  styleUrls: ['./nuevousuario.page.scss'],
})
export class NuevousuarioPage implements OnInit {
  
  tipoCuenta: string = ''; // Variable para almacenar la opción de tipo de cuenta
  atiendeClinica: boolean = false; // Almacena si atiende en consulta
  clinicas: string[] = [];// Almacena las clínicas
  atiendeParticular: boolean = false;

  constructor(private popoverController: PopoverController) { }

  // Método que se llama cuando se cambia el estado del toggle
  toggleClinica() {
    if (!this.atiendeClinica) {
      this.clinicas = []; // Si desactiva la opción, borra las direcciones
    }
  }
  
  // Método para agregar una nueva clinica
  agregarClinica() {
    this.clinicas.push(''); // Agrega un nuevo campo vacío en el array de clinicas
  }

   // Método para eliminar una clínica específica
   eliminarClinica(index: number) {
    this.clinicas.splice(index, 1); // Elimina la clínica en el índice especificado
  }


  // Método para mostrar el popover de términos y condiciones
  async showTermsPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: TerminospopoverComponent,
      event,  // Usar el evento para posicionar el popover cerca del clic
      translucent: true,
      cssClass: 'full-screen-popover' 
    });
    await popover.present();
  }
  ngOnInit() {}
}


