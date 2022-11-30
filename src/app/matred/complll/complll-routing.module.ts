import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplllPage } from './complll.page';

const routes: Routes = [
  {
    path: '',
    component: ComplllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplllPageRoutingModule {}
