import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspPage } from './esp.page';

const routes: Routes = [
  {
    path: '',
    component: EspPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspPageRoutingModule {}
