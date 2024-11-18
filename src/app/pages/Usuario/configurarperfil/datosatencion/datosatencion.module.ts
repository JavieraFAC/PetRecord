import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosatencionPageRoutingModule } from './datosatencion-routing.module';

import { DatosatencionPage } from './datosatencion.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosatencionPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DatosatencionPage]
})
export class DatosatencionPageModule {}
