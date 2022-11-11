import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RnaednaPage } from './rnaedna.page';
import { BioPage } from '../../materia/bio/bio.page';
import { TipPage } from '../tip/tip.page';

const routes: Routes = [
  {
    path: '',
    component: RnaednaPage
  },
  {
    path: 'bio',
    component: BioPage
  },
  {
    path: 'tip',
    component: TipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RnaednaPageRoutingModule {}
