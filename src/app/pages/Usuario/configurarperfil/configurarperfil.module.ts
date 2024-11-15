import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurarperfilPageRoutingModule } from './configurarperfil-routing.module';

import { ConfigurarperfilPage } from './configurarperfil.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurarperfilPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ConfigurarperfilPage]
})
export class ConfigurarperfilPageModule {}
