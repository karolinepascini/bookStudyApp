import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioPage } from './bio.page';
import { IcpPage } from '../../matbio/icp/icp.page';
import { RnaednaPage } from '../../matbio/rnaedna/rnaedna.page';

const routes: Routes = [
  {
    path: '',
    component: BioPage
  },
  {
    path: 'icp',
    component: IcpPage
  },
  {
    path: 'rnaedna',
    component: RnaednaPage
  },
  {
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioPageRoutingModule {}
