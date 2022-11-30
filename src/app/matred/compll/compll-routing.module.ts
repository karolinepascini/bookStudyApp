import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompllPage } from './compll.page';

const routes: Routes = [
  {
    path: '',
    component: CompllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompllPageRoutingModule {}
