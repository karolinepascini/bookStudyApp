import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiloPage } from './filo.page';

const routes: Routes = [
  {
    path: '',
    component: FiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiloPageRoutingModule {}
