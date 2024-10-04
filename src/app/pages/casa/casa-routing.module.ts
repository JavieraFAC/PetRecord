import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasaPage } from './casa.page';

const routes: Routes = [
  {
    path: '',
    component: CasaPage
  },
  {
    path: 'configuracioncuenta',
    loadChildren: () => import('../../home/configuracioncuenta/configuracioncuenta.module').then( m => m.ConfiguracioncuentaPageModule)
  }
  ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasaPageRoutingModule {}
