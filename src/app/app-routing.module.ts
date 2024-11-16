import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { noAuthGuard } from './guards/no-auth.guard';
import { authGuard } from './guards/auth.guard';
import { NofoundComponent } from './componentes/nofound/nofound.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'perfil',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[noAuthGuard]
  },
  {
    path: 'nuevacuenta',
    loadChildren: () => import('./pages/nuevacuenta/nuevacuenta.module').then( m => m.NuevacuentaPageModule),
    canActivate:[noAuthGuard]
  },
  {
    path: 'olvidocontrasena',
    loadChildren: () => import('./pages/olvidocontrasena/olvidocontrasena.module').then( m => m.OlvidocontrasenaPageModule),
    canActivate:[noAuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/Usuario/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'api',
    loadChildren: () => import('./pages/Usuario/api/api.module').then( m => m.ApiPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'tutores',
    loadChildren: () => import('./pages/Usuario/tutores/tutores.module').then( m => m.TutoresPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'configurarperfil',
    loadChildren: () => import('./pages/Usuario/configurarperfil/configurarperfil.module').then( m => m.ConfigurarperfilPageModule),
    canActivate:[authGuard]
  },
  {
    path:'**', 
    component: NofoundComponent,
    canActivate:[authGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
