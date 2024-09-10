import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidocontrasenaPageRoutingModule } from './olvidocontrasena-routing.module';

import { OlvidocontrasenaPage } from './olvidocontrasena.page';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatSliderModule } from '@angular/material/slider'; // Asegúrate de que este importado
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Asegúrate de que este importado


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidocontrasenaPageRoutingModule,
    SharedModule, 
    MatSliderModule,
    MatProgressSpinnerModule  
 

  ],
  declarations: [OlvidocontrasenaPage]
})
export class OlvidocontrasenaPageModule {}
