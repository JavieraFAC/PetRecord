import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidaPassPageRoutingModule } from './olvida-pass-routing.module';

import { OlvidaPassPage } from './olvida-pass.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidaPassPageRoutingModule,
    SharedModule
  ],
  declarations: [OlvidaPassPage]
})
export class OlvidaPassPageModule {}
