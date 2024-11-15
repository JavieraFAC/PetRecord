import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidocontrasenaPage } from './olvidocontrasena.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidocontrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidocontrasenaPageRoutingModule {}
