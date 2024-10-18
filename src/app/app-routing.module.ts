import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { NoFoundComponent } from './shared/no-found/no-found.component';

const routes: Routes = [
  {
    path: 'home', // LOGIN 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'casa', //protegida 
    loadChildren: () => import('./pages/casa/casa.module').then( m => m.CasaPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'ayudarlinea',
    loadChildren: () => import('./pages/ayudarlinea/ayudarlinea.module').then( m => m.AyudarlineaPageModule),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'citas',
    loadChildren: () => import('./pages/citas/citas.module').then( m => m.CitasPageModule),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'cmedica',
    loadChildren: () => import('./pages/cmedica/cmedica.module').then( m => m.CmedicaPageModule),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'tutores',
    loadChildren: () => import('./pages/tutores/tutores.module').then( m => m.TutoresPageModule),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./pages/login/nuevo/nuevo.module').then( m => m.NuevoPageModule),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'olvida-pass',
    loadChildren: () => import('./pages/login/olvida-pass/olvida-pass.module').then( m => m.OlvidaPassPageModule)
  },
  {
    path: 'tutores',
    loadChildren: () => import('./pages/tutores/tutores.module').then( m => m.TutoresPageModule),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'mascotas',
    loadChildren: () => import('./pages/mascotas/mascotas.module').then( m => m.MascotasPageModule),
    canActivate: [AuthGuard], // Ruta protegida
  },
 {
  path: '**', // ruta desconocida redirige a componente no-found
  component: NoFoundComponent,
 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
