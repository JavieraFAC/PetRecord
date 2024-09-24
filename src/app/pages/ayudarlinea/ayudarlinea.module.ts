import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudarlineaPageRoutingModule } from './ayudarlinea-routing.module';

import { AyudarlineaPage } from './ayudarlinea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudarlineaPageRoutingModule
  ],
  declarations: [AyudarlineaPage]
})
export class AyudarlineaPageModule {}
