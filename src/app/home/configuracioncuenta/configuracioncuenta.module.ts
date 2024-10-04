import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracioncuentaPageRoutingModule } from './configuracioncuenta-routing.module';

import { ConfiguracioncuentaPage } from './configuracioncuenta.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracioncuentaPageRoutingModule,
    SharedModule
  ],
  declarations: [ConfiguracioncuentaPage]
})
export class ConfiguracioncuentaPageModule {}
