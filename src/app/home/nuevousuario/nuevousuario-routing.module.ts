import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevousuarioPage } from './nuevousuario.page';

const routes: Routes = [
  {
    path: '',
    component: NuevousuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevousuarioPageRoutingModule {}
