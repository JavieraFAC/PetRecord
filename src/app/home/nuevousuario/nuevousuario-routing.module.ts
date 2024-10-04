import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevousuarioPage } from './nuevousuario.page';

const routes: Routes = [
  {
    path: '',
    component: NuevousuarioPage
  },
  {
    path: 'configuracioncuenta',
    loadChildren: () => import('../configuracioncuenta/configuracioncuenta.module').then( m => m.ConfiguracioncuentaPageModule)
  },
  {
    path:'cero',
    loadChildren:() => import('../page0/page0.module').then(m => m.Page0PageModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevousuarioPageRoutingModule {}
