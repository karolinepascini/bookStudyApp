import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplvPage } from './complv.page';

const routes: Routes = [
  {
    path: '',
    component: ComplvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplvPageRoutingModule {}
