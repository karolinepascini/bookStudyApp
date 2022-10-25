import { ImunoPage } from './../matbio/imuno/imuno.page';
import { IcpPage } from './../matbio/icp/icp.page';
import { RnaednaPage } from './../matbio/rnaedna/rnaedna.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioPage } from './bio.page';

const routes: Routes = [
  {
    path: '',
    component: BioPage
  },
  {
    path: 'rnaedna',
    component: RnaednaPage
  },
  {
    path: 'icp',
    component: IcpPage
  },
  {
    path: 'imuno',
    component: ImunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioPageRoutingModule {}
