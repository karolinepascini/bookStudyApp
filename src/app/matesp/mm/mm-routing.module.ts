import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MmPage } from './mm.page';

const routes: Routes = [
  {
    path: '',
    component: MmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MmPageRoutingModule {}
