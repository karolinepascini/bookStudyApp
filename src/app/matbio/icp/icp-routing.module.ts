import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcpPage } from './icp.page';
import { BioPage } from '../../materia/bio/bio.page';

const routes: Routes = [
  {
    path: '',
    component: IcpPage
  },
  {
    path: 'bio',
    component: BioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcpPageRoutingModule {}
