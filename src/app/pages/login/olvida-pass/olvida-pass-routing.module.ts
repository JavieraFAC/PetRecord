import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidaPassPage } from './olvida-pass.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidaPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidaPassPageRoutingModule {}
