import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudarlineaPage } from './ayudarlinea.page';

const routes: Routes = [
  {
    path: '',
    component: AyudarlineaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudarlineaPageRoutingModule {}
