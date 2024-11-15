import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'nuevacuenta',
    loadChildren: () => import('./pages/nuevacuenta/nuevacuenta.module').then( m => m.NuevacuentaPageModule)
  },
  {
    path: 'olvidocontrasena',
    loadChildren: () => import('./pages/olvidocontrasena/olvidocontrasena.module').then( m => m.OlvidocontrasenaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/Usuario/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'api',
    loadChildren: () => import('./pages/Usuario/api/api.module').then( m => m.ApiPageModule)
  },
  {
    path: 'tutores',
    loadChildren: () => import('./pages/Usuario/tutores/tutores.module').then( m => m.TutoresPageModule)
  },
  {
    path: 'configurarperfil',
    loadChildren: () => import('./pages/Usuario/configurarperfil/configurarperfil.module').then( m => m.ConfigurarperfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
