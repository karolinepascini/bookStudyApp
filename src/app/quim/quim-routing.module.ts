import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuimPage } from './quim.page';

const routes: Routes = [
  {
    path: '',
    component: QuimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuimPageRoutingModule {}
