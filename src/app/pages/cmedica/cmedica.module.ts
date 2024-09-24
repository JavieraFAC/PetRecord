import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmedicaPageRoutingModule } from './cmedica-routing.module';

import { CmedicaPage } from './cmedica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmedicaPageRoutingModule
  ],
  declarations: [CmedicaPage]
})
export class CmedicaPageModule {}
