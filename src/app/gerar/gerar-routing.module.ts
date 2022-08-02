import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerarPage } from './gerar.page';

const routes: Routes = [
  {
    path: '',
    component: GerarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerarPageRoutingModule {}
