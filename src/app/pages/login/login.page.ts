import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

// formulario inicio de sesion
  form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  })
// injeccion de firebase y sevicios
  fireBS = inject (FirebaseService);
  cargandoS = inject(CargandoService);

  ngOnInit() {}

  //boton para ingresar sesión
  async submit(){
    if(this.form.valid){
      // cargando animacion
      const cargando = await this.cargandoS.cargando();
      await cargando.present();

      this.fireBS.signIn(this.form.value as Usuario).then(res => {

        this.getUserInfo(res.user.uid);

      }).catch(error =>{

        this.cargandoS.presentToast({
          message: 'Correo o contraseña incorrecta',
          duration: 3000,
          color: 'danger',
          position: 'middle',
        })

      }).finally(() =>{
        cargando.dismiss();
      })
    }
    
  }



  async getUserInfo (uid: string){

    if(this.form.valid){

      const cargando = await this.cargandoS.cargando();
      await cargando.present();

      let path= `users/${uid}`;

      
      this.fireBS.getDocument(path).then((user: Usuario) =>{
        // mantener datos de forma local
          this.cargandoS.guardarEnLocalStorage('user', user)
          this.cargandoS.routerLink('/perfil'); // redifigir al home -> perfil
          this.form.reset(); // resetear formulario

          // mensaje de bienvenenida
          this.cargandoS.presentToast({
            message: `Bienvenid@ ${user.nombre}`,
            duration: 2000,
            color:'primary',
            position:'middle'
          })

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

}
