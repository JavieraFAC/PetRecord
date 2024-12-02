import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleTutorPageRoutingModule } from './detalle-tutor-routing.module';

import { DetalleTutorPage } from './detalle-tutor.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleTutorPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DetalleTutorPage]
})
export class DetalleTutorPageModule {}
