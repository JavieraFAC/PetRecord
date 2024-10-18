import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DBloginService } from '../services/dblogin.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

        form: FormGroup;

        constructor(
          private fb: FormBuilder,
          private authService: DBloginService,
          private router: Router,
          private toastController: ToastController
        ) {
          this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
          });
        }

  ngOnInit() { }

  // obtener email y contraseña 
  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  // tomar los get 

 async submit() {
    const { email, password } = this.form.value;

    if (this.authService.login(email, password)) {
      const toast = await this.toastController.create({
        message: 'Inicio de sesión exitoso',
        duration: 2000,
        color: 'success',
      });

      toast.present();
      this.router.navigate(['/casa']);
    } else {
      const toast = await this.toastController.create({
        message: 'Correo o contraseña incorrectos',
        duration: 3000,
        translucent:true,
        position: 'middle',
        color: 'danger',
      });
      toast.present();
    }
  }
}