import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosprofesionalesPageRoutingModule } from './datosprofesionales-routing.module';

import { DatosprofesionalesPage } from './datosprofesionales.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosprofesionalesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DatosprofesionalesPage]
})
export class DatosprofesionalesPageModule {}
