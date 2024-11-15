import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidocontrasenaPageRoutingModule } from './olvidocontrasena-routing.module';

import { OlvidocontrasenaPage } from './olvidocontrasena.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidocontrasenaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [OlvidocontrasenaPage]
})
export class OlvidocontrasenaPageModule {}
