import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatospersonalesPageRoutingModule } from './datospersonales-routing.module';

import { DatospersonalesPage } from './datospersonales.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatospersonalesPageRoutingModule,
    ComponentsModule,
    
  ],
  declarations: [DatospersonalesPage]
})
export class DatospersonalesPageModule {}
