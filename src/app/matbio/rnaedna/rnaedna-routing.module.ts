import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RnaednaPage } from './rnaedna.page';
import { BioPage } from '../../bio/bio.page';

const routes: Routes = [
  {
    path: '',
    component: RnaednaPage
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
export class RnaednaPageRoutingModule {}
