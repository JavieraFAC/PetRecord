import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurarperfilPage } from './configurarperfil.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurarperfilPage
  },
  {
    path: 'datospersonales',
    loadChildren: () => import('./datospersonales/datospersonales.module').then( m => m.DatospersonalesPageModule)
  },
  {
    path: 'datosprofesionales',
    loadChildren: () => import('./datosprofesionales/datosprofesionales.module').then( m => m.DatosprofesionalesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurarperfilPageRoutingModule {}
