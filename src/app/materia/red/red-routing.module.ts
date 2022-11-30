import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedPage } from './red.page';
import { ComplPage } from '../../matred/compl/compl.page';
import { CompllPage } from '../../matred/compll/compll.page';
import { ComplllPage } from '../../matred/complll/complll.page';
import { ComplvPage } from '../../matred/complv/complv.page';
import { CompvPage } from '../../matred/compv/compv.page';

const routes: Routes = [
  {
    path: '',
    component: RedPage
  },
  {
    path: 'compl',
    component: ComplPage
  },
  {
    path: 'compll',
    component: CompllPage
  },
  {
    path: 'complll',
    component: ComplllPage
  },
  {
    path: 'complv',
    component: ComplvPage
  },
  {
    path: 'compv',
    component: CompvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedPageRoutingModule {}
