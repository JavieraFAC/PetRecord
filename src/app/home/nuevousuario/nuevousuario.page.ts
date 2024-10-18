import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { TerminospopoverComponent } from './terminospopover/terminospopover.component';
import { Router, NavigationExtras } from '@angular/router';
import { DBloginService } from 'src/app/services/dblogin.service';


@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.page.html',
  styleUrls: ['./nuevousuario.page.scss'],
})
export class NuevousuarioPage implements OnInit {
  
  tipoCuenta: string = ''; // tipo de cuenta
  VatiendeClinica: boolean = false; // Almacena si atiende en consulta
  Vclinicas: string[] = []; // Almacena las clínicas
  VatiendeParticular: boolean = false;
  
  // Datos personales
  Vnombre: string = '';
  Vapellidos: string = '';
  Vrun: string = '';
  Vtelefono: string = '';
  Vcorreo: string = '';
  Vpassword: string = '';
  VconfirmPassword: string = '';
  
  // Perfil profesional
  Vuniversidad: string = '';
  VnumeroRegistro: string = '';
  VpaisRegistro: string = '';
  Vespecialidad: string = '';
  
  // Variable acepta términos
  VaceptoTerminos: boolean = false;

  // Imágenes
  VperfilImagen: File | null = null;  // imagen de perfil
  VfirmaImagen: File | null = null;    // firma

  constructor(private popoverController: PopoverController, 
              private router: Router, 
              private toastController:ToastController,
              private DBloginService: DBloginService) { }

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

  // carga de imagenes
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
      event, 
      translucent: true,
      cssClass: 'full-screen-popover' 
    });
    await popover.present();
  }

    // Método para mostrar toast
    async mostrarToast(mensaje: string, color: string = 'danger') {
      const toast = await this.toastController.create({
        message: mensaje,
        position: 'middle',
        duration: 3000,
        color: color
      });
      toast.present();
    }

  // --------------------- NUEVO VETERINARIO


  registrarVeterinario() {

    if (this.tipoCuenta === 'Veterinario') {
      // Almacenar mensajes de error si los campos están vacíos
      let mensajesErrores: string[] = [];
      if (!this.Vnombre) mensajesErrores.push('Nombre');
      if (!this.Vapellidos) mensajesErrores.push('Apellidos');
      if (!this.Vrun) mensajesErrores.push('RUN');
      if (!this.Vtelefono) mensajesErrores.push('Teléfono');
      if (!this.Vcorreo) mensajesErrores.push('Correo electrónico');
      if (!this.Vpassword) mensajesErrores.push('Contraseña');
      if (this.Vpassword !== this.VconfirmPassword) {
        mensajesErrores.push('Las contraseñas no coinciden');
      }
          // Validar aceptar terminos y condiciones
        if (!this.VaceptoTerminos) {
          mensajesErrores.push('Debe aceptar los términos y condiciones');
        }

      // Si hay errores, mostrar el mensaje y retornar
      if (mensajesErrores.length > 0) {
        const mensaje = `Por favor, complete los siguientes campos obligatorios: ${mensajesErrores.join(', ')}`;
        this.mostrarToast(mensaje, 'danger');
        return;
      }

        const datosVeterinario = {
          tipoCuenta: this.tipoCuenta,
          nombre: this.Vnombre,
          apellidos: this.Vapellidos,
          rut: this.Vrun,
          telefono: this.Vtelefono,
          correo: this.Vcorreo,
          password: this.Vpassword,
          universidad: this.Vuniversidad,
          numeroRegistro: this.VnumeroRegistro,
          paisRegistro: this.VpaisRegistro,
          especialidad: this.Vespecialidad,
          clinicas: this.Vclinicas,
          atiendeClinica: this.VatiendeClinica,
          atiendeParticular: this.VatiendeParticular
        };


    // Registrar el usuario usando el DBLoginService
    const registroExitoso = this.DBloginService.registrarUsuario(datosVeterinario);

    if (registroExitoso) {

        localStorage.setItem('usuarioNombre', this.Vnombre); // Guarda el nombre
        localStorage.setItem('usuarioRun', this.Vrun); // Guarda el RUN
      this.mostrarToast('Veterinario registrado con éxito', 'success');
      this.router.navigate(['/casa']); 
    } else {
      this.mostrarToast('El correo ya está registrado', 'danger');
    }
  }
}


  ngOnInit() {
    // Aquí puedes inicializar datos si es necesario
  }
  }
