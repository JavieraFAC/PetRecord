import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleTutorPage } from './detalle-tutor.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleTutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleTutorPageRoutingModule {}
