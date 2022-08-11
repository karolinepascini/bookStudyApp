import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngPage } from './ing.page';

const routes: Routes = [
  {
    path: '',
    component: IngPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngPageRoutingModule {}
