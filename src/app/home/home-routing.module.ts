import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'nuevousuario',
    loadChildren: () => import('./nuevousuario/nuevousuario.module').then( m => m.NuevousuarioPageModule)
  },
  {
    path: 'olvidocontrasena',
    loadChildren: () => import('./olvidocontrasena/olvidocontrasena.module').then( m => m.OlvidocontrasenaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
