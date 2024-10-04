import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasaPageRoutingModule } from './casa-routing.module';

import { CasaPage } from './casa.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasaPageRoutingModule,
    SharedModule
  ],
  declarations: [CasaPage]
})
export class CasaPageModule {}
