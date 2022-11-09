import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FisPage } from './fis.page';

const routes: Routes = [
  {
    path: '',
    component: FisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FisPageRoutingModule {}
