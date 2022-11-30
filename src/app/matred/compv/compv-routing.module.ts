import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompvPage } from './compv.page';

const routes: Routes = [
  {
    path: '',
    component: CompvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompvPageRoutingModule {}
