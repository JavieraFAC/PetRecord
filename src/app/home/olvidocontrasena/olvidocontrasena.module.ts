import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidocontrasenaPageRoutingModule } from './olvidocontrasena-routing.module';

import { OlvidocontrasenaPage } from './olvidocontrasena.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidocontrasenaPageRoutingModule,
    SharedModule,
  ],
  declarations: [OlvidocontrasenaPage]
})
export class OlvidocontrasenaPageModule {}
