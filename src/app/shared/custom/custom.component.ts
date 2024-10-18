import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent  implements OnInit {


  @Input() control!: FormControl;
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() autocomplete: string = 'off';
  @Input() icon: string = '';

  isPassw: boolean = false;
  hide: boolean = true;


  constructor() { }

  ngOnInit() {
    // Verificación de seguridad por si no se pasa el control como FormControl
    if (!(this.control instanceof FormControl)) {
      throw new Error('El control proporcionado no es un FormControl válido.');
    }

    // Determinar si el campo es una contraseña
    if (this.type === 'password') this.isPassw = true;
  }

  // Alternar visibilidad de la contraseña
  showOrHidePassw() {
    this.hide = !this.hide;
    this.type = this.hide ? 'password' : 'text';
  }

}