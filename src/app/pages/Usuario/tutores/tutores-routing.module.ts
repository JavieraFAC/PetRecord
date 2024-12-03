import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutoresPage } from './tutores.page';
import { DetalleTutorPage } from './detalle-tutor/detalle-tutor.page';

const routes: Routes = [
  {
    path: '',
    component: TutoresPage
  },
  {
    path: 'detalle-tutor/:id',
    loadChildren: () => import('./detalle-tutor/detalle-tutor.module').then( m => m.DetalleTutorPageModule),
    component: DetalleTutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutoresPageRoutingModule {}
