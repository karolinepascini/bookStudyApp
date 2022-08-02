import { EsquecisenhaPage } from './../esquecisenha/esquecisenha.page';
import { TabsPage } from './../tabs/tabs.page';
import { Tab1Page } from './../tab1/tab1.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroPage } from './cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPage
  },
  {
    path:'tab1',
    component: Tab1Page
  },
  {
    path:'tabs',
    component: TabsPage
  },
  {
    path:'login',
    component: CadastroPage
  },
  {
    path:'esqueciasenha',
    component: EsquecisenhaPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroPageRoutingModule {}
