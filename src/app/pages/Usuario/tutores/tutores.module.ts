import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutoresPageRoutingModule } from './tutores-routing.module';

import { TutoresPage } from './tutores.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutoresPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TutoresPage]
})
export class TutoresPageModule {}
