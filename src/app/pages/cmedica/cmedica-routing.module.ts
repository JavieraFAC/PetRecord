import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmedicaPage } from './cmedica.page';

const routes: Routes = [
  {
    path: '',
    component: CmedicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmedicaPageRoutingModule {}
