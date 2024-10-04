import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ayudarlinea',
    loadChildren: () => import('./pages/ayudarlinea/ayudarlinea.module').then( m => m.AyudarlineaPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'casa',
    loadChildren: () => import('./pages/casa/casa.module').then( m => m.CasaPageModule)
  },
  {
    path: 'citas',
    loadChildren: () => import('./pages/citas/citas.module').then( m => m.CitasPageModule)
  },
  {
    path: 'cmedica',
    loadChildren: () => import('./pages/cmedica/cmedica.module').then( m => m.CmedicaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'tutores',
    loadChildren: () => import('./pages/tutores/tutores.module').then( m => m.TutoresPageModule)
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./pages/login/nuevo/nuevo.module').then( m => m.NuevoPageModule)
  },
  {
    path: 'olvida-pass',
    loadChildren: () => import('./pages/login/olvida-pass/olvida-pass.module').then( m => m.OlvidaPassPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
