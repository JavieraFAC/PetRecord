import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { TerminospopoverComponent } from './terminospopover/terminospopover.component';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.page.html',
  styleUrls: ['./nuevousuario.page.scss'],
})
export class NuevousuarioPage implements OnInit {
  
  tipoCuenta: string = ''; // Variable para almacenar la opción de tipo de cuenta
  VatiendeClinica: boolean = false; // Almacena si atiende en consulta
  Vclinicas: string[] = []; // Almacena las clínicas
  VatiendeParticular: boolean = false;
  
  // Datos personales
  Vnombre: string = '';
  Vapellidos: string = '';
  Vrun: string = '';
  Vtelefono: string = '';
  Vcorreo: string = '';
  
  // Perfil profesional
  Vuniversidad: string = '';
  VnumeroRegistro: string = '';
  VpaisRegistro: string = '';
  Vespecialidad: string = '';
  
  // Variable acepta términos
  VaceptoTerminos: boolean = false;

  // Imágenes
  VperfilImagen: File | null = null;  // Para almacenar la imagen de perfil
  VfirmaImagen: File | null = null;    // Para almacenar la firma

  constructor(private popoverController: PopoverController, private router: Router, toastController:ToastController) { }

  // Método que se llama cuando se cambia el estado del toggle
  toggleClinica() {
    if (!this.VatiendeClinica) {
      this.Vclinicas = [];
    }
  }
  
  // Método para agregar una nueva clínica
  agregarClinica() {
    this.Vclinicas.push(''); // Agrega un nuevo campo vacío en el array de clínicas
  }

  // Método para eliminar una clínica específica
  eliminarClinica(index: number) {
    this.Vclinicas.splice(index, 1); // Elimina la clínica en el índice especificado
  }

  onFileChange(event: Event, type: 'perfil' | 'firma') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (type === 'perfil') {
        this.VperfilImagen = file;
      } else if (type === 'firma') {
        this.VfirmaImagen = file;
      }
    }
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

  // --------------------- NUEVO VETERINARIO

  registrarVeterinario() {
    if (this.tipoCuenta === 'Veterinario') { 
      // Validar si todos los campos requeridos están llenos
      if (!this.Vnombre || !this.Vapellidos || !this.Vrun || !this.Vtelefono || !this.Vcorreo || !this.Vuniversidad || !this.VnumeroRegistro || !this.VpaisRegistro || !this.Vespecialidad) {
        alert('Por favor, complete los campos obligatorios');
        return;
      }
    }

    const datosVeterinario = {
      tipoCuenta: this.tipoCuenta,
      nombre: this.Vnombre,
      apellidos: this.Vapellidos,
      rut: this.Vrun,
      telefono: this.Vtelefono,
      correo: this.Vcorreo,
      universidad: this.Vuniversidad,
      numeroRegistro: this.VnumeroRegistro,
      paisRegistro: this.VpaisRegistro,
      especialidad: this.Vespecialidad,
      clinicas: this.Vclinicas,
      atiendeClinica: this.VatiendeClinica,
      atiendeParticular: this.VatiendeParticular
    };


  }


  ngOnInit() {
    // Aquí puedes inicializar datos si es necesario
  }
}
