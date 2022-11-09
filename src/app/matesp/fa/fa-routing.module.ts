import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaPage } from './fa.page';

const routes: Routes = [
  {
    path: '',
    component: FaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaPageRoutingModule {}
