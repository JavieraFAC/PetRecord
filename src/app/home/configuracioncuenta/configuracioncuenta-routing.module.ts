import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracioncuentaPage } from './configuracioncuenta.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracioncuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracioncuentaPageRoutingModule {}
