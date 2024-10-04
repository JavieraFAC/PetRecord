import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page0Page } from './page0.page';

const routes: Routes = [
  {
    path: '',
    component: Page0Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page0PageRoutingModule {}
