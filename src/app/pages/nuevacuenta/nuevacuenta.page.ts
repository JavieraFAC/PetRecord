import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController, ToastController } from '@ionic/angular';
import { TerminosycondicionesComponent } from 'src/app/componentes/terminosycondiciones/terminosycondiciones.component';
import { Usuario } from 'src/app/models/usuario.model';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-nuevacuenta',
  templateUrl: './nuevacuenta.page.html',
  styleUrls: ['./nuevacuenta.page.scss'],
})
export class NuevacuentaPage implements OnInit {

 // formulario para crerar nuevo usuario veterinario
  form = new FormGroup({
    uid: new FormControl(''),
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    apellidos: new FormControl('',[Validators.required, Validators.minLength(5)]),
    run: new FormControl('',[Validators.required]),
    telefono: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confpassword: new FormControl('', [Validators.required]),
    aceptaTerminos: new FormControl(false, Validators.requiredTrue),
  }, { validators: this.passwordsMatch });


  fireBS = inject(FirebaseService);
  cargandoS = inject(CargandoService);
  router = inject(Router);
  toastController = inject(ToastController);
  popoverController = inject(PopoverController);

  tipoCuenta: string = ''; // tipo de cuenta
  Vrun: string = '';



  ngOnInit() {}

  async submit(){
    if (!this.validarRUN()){return;}
    if (this.form.valid){
      const cargando = await this.cargandoS.cargando();
      await cargando.present();

      this.fireBS.signUp(this.form.value as Usuario).then( async res =>{

       await this.fireBS.updateUser(this.form.value.nombre);

       const nombre = this.form.value.nombre;
       await this.fireBS.updateUser(nombre);

       this.mostrarToast(`¡Bienvenido(a), ${nombre}!`, 'success');


       //traer uid del usuario veterinario
       let uid = res.user.uid;
       this.form.controls.uid.setValue(uid);
       this.setUserInfo(uid);



      }).catch(error => {
        this.cargandoS.presentToast({
          message: 'Por favor, completa todos los datos',
          duration:3000,
          color: 'danger',
          position: 'middle',
        });
      }).finally(() => cargando.dismiss());
    }
  }


  
  async setUserInfo (uid: string){

    if(this.form.valid){

      const cargando = await this.cargandoS.cargando();
      await cargando.present();

      let path= `users/${uid}`;
      delete this.form.value.password;
      delete this.form.value.confpassword;

      
      this.fireBS.setDocument(path, this.form.value).then(async res =>{
        // mantener datos de forma local
          this.cargandoS.guardarEnLocalStorage('user', this.form.value);

          this.cargandoS.routerLink('/perfil'); // redifigir al home -> perfil
          this.form.reset(); // resetear formulario

      }).catch(error => {
        this.cargandoS.presentToast({
          message: error.message,
          duration: 2000,
          color:'primary',
          position:'middle'
        })
      }).finally(()=> {
        cargando.dismiss();
      })
    }
  }







   // --------------------------------------- RUT ---------------------------------------
   validarRUN(): boolean {
    const run = this.form.controls.run.value; // Obtén el valor directamente del FormGroup
  
    // Verifica si el RUN es nulo o vacío
    if (!run) {
      this.mostrarToast('RUN inválido: no puede estar vacío.', 'danger');
      return false;
    }
  
    const cleanedRun = run.replace(/\./g, '').replace('-', '').toUpperCase(); // Limpiar el formato
    const cuerpo = cleanedRun.slice(0, -1);  // Parte numérica
    const dvIngresado = cleanedRun.slice(-1); // Dígito verificador
  
    if (cuerpo.length < 7 || !/^\d+$/.test(cuerpo)) {
      this.mostrarToast('RUN inválido: debes escribirlo sin puntos, con guión y dígito verificador.', 'danger');
      return false;
    }
    const dvCalculado = this.calcularDigitoVerificador(cuerpo);
  
    if (dvIngresado !== dvCalculado) {
      this.mostrarToast(`RUN inválido`, 'danger');
      return false;
    } 
    return true;
  }

// dígito verificador
calcularDigitoVerificador(cuerpo: string): string {
  let suma = 0;
  let multiplicador = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo[i], 10) * multiplicador;
    multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
  }

  const resto = suma % 11;
  const dv = 11 - resto;

  if (dv === 11) return '0';
  if (dv === 10) return 'K';
  return dv.toString();
}



passwordsMatch(group: FormGroup) {
  return group.get('password').value === group.get('confpassword').value ? null : { mismatch: true };
}
  // ------------------------------------------------------------------------------------
  // ------------------------------------POPOVER-----------------------------------------
  async showTermsPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: TerminosycondicionesComponent,
      event,
      translucent: true,
      cssClass: 'full-screen-popover'
    });
    await popover.present();
  }


  // ------------------------------------------------------------------------------------
  // -----------------------------------MENSAJE------------------------------------------
  private  async mostrarToast(mensaje: string, color: string = 'success') {
      const toast = await this.toastController.create({
        message: mensaje,
        position: 'middle',
        duration: 2000,
        color: color
      });
      toast.present();
    }
}
