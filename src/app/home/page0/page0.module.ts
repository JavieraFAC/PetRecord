import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page0PageRoutingModule } from './page0-routing.module';

import { Page0Page } from './page0.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page0PageRoutingModule
  ],
  declarations: [Page0Page]
})
export class Page0PageModule {}
