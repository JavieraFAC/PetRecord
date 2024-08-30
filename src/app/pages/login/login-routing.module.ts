import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./nuevo/nuevo.module').then( m => m.NuevoPageModule)
  },
  {
    path: 'olvida-pass',
    loadChildren: () => import('./olvida-pass/olvida-pass.module').then( m => m.OlvidaPassPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
