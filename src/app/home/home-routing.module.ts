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
  },
  {
    path: 'configuracioncuenta',
    loadChildren: () => import('./configuracioncuenta/configuracioncuenta.module').then( m => m.ConfiguracioncuentaPageModule)
  },
  {
    path: 'casa',
    loadChildren: () => import('../pages/casa/casa.module').then(m => m.CasaPageModule)
  },
  {
    path: 'page0',
    loadChildren: () => import('./page0/page0.module').then( m => m.Page0PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
