import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcpPage } from './icp.page';

const routes: Routes = [
  {
    path: '',
    component: IcpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcpPageRoutingModule {}
