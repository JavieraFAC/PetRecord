import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-configurarperfil',
  templateUrl: './configurarperfil.page.html',
  styleUrls: ['./configurarperfil.page.scss'],
})
export class ConfigurarperfilPage implements OnInit {

  fireBS = inject(FirebaseService);
  cargandoS = inject(CargandoService);

// imagen de perfil como form
  form = new FormGroup({
    imagenPerfil: new FormControl('',[Validators.required]),
  })

  ngOnInit() {}

  async tomarImagen(){
    const dataUrl = (await this.cargandoS.tomarFoto('Foto de perfil')).dataUrl;
     this.form.controls.imagenPerfil.setValue(dataUrl);
   }

}
