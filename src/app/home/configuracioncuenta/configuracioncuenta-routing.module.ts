import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracioncuentaPage } from './configuracioncuenta.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracioncuentaPage
  },
  {
    path: 'casa',
    loadChildren: () => import('../../pages/casa/casa.module').then( m => m.CasaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracioncuentaPageRoutingModule {}
