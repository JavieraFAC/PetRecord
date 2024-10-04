import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutoresPageRoutingModule } from './tutores-routing.module';

import { TutoresPage } from './tutores.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutoresPageRoutingModule,
    SharedModule
  ],
  declarations: [TutoresPage]
})
export class TutoresPageModule {}
