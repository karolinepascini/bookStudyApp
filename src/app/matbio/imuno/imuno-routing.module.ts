import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImunoPage } from './imuno.page';

const routes: Routes = [
  {
    path: '',
    component: ImunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImunoPageRoutingModule {}
