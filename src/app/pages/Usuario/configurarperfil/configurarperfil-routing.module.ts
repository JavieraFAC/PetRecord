import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurarperfilPage } from './configurarperfil.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurarperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurarperfilPageRoutingModule {}
