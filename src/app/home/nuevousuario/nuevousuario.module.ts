import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevousuarioPageRoutingModule } from './nuevousuario-routing.module';

import { NuevousuarioPage } from './nuevousuario.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevousuarioPageRoutingModule,
    SharedModule
  ],
  declarations: [NuevousuarioPage]
})
export class NuevousuarioPageModule {}
