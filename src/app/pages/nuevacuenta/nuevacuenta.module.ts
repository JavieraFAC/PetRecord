import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevacuentaPageRoutingModule } from './nuevacuenta-routing.module';

import { NuevacuentaPage } from './nuevacuenta.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevacuentaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [NuevacuentaPage]
})
export class NuevacuentaPageModule {}
