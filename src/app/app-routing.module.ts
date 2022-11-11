import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cadastro',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./cadastro/cadastro.module').then((m) => m.CadastroPageModule),
  },
  {
    path: 'esquecisenha',
    loadChildren: () =>
      import('./esquecisenha/esquecisenha.module').then(
        (m) => m.EsquecisenhaPageModule
      ),
  },
  {
    path: 'gerar',
    loadChildren: () =>
      import('./gerar/gerar.module').then((m) => m.GerarPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'bio',
    loadChildren: () => import('./materia/bio/bio.module').then( m => m.BioPageModule)
  },
  {
    path: 'esp',
    loadChildren: () => import('./materia/esp/esp.module').then( m => m.EspPageModule)
  },
  {
    path: 'filo',
    loadChildren: () => import('./materia/filo/filo.module').then( m => m.FiloPageModule)
  },
  {
    path: 'fis',
    loadChildren: () => import('./materia/fis/fis.module').then( m => m.FisPageModule)
  },
  {
    path: 'geo',
    loadChildren: () => import('./materia/geo/geo.module').then( m => m.GeoPageModule)
  },
  {
    path: 'his',
    loadChildren: () => import('./materia/his/his.module').then( m => m.HisPageModule)
  },
  {
    path: 'ing',
    loadChildren: () => import('./materia/ing/ing.module').then( m => m.IngPageModule)
  },
  {
    path: 'port',
    loadChildren: () => import('./materia/port/port.module').then( m => m.PortPageModule)
  },
  {
    path: 'mat',
    loadChildren: () => import('./materia/mat/mat.module').then( m => m.MatPageModule)
  },
  {
    path: 'quim',
    loadChildren: () => import('./materia/quim/quim.module').then( m => m.QuimPageModule)
  },
  {
    path: 'red',
    loadChildren: () => import('./materia/red/red.module').then( m => m.RedPageModule)
  },
  {
    path: 'socio',
    loadChildren: () => import('./materia/socio/socio.module').then( m => m.SocioPageModule)
  },
  {
    path: 'imuno',
    loadChildren: () => import('./matbio/imuno/imuno.module').then( m => m.ImunoPageModule)
  },
  {
    path: 'rnaedna',
    loadChildren: () => import('./matbio/rnaedna/rnaedna.module').then( m => m.RnaednaPageModule)
  },
  {
    path: 'icp',
    loadChildren: () => import('./matbio/icp/icp.module').then( m => m.IcpPageModule)
  },
  {
    path: 'pp',
    loadChildren: () => import('./matesp/pp/pp.module').then( m => m.PpPageModule)
  },
  {
    path: 'pp',
    loadChildren: () => import('./matesp/pp/pp.module').then( m => m.PpPageModule)
  },
  {
    path: 'pp',
    loadChildren: () => import('./matesp/pp/pp.module').then( m => m.PpPageModule)
  },
  {
    path: 'fa',
    loadChildren: () => import('./matesp/fa/fa.module').then( m => m.FaPageModule)
  },
  {
    path: 'mm',
    loadChildren: () => import('./matesp/mm/mm.module').then( m => m.MmPageModule)
  },  {
    path: 'tip',
    loadChildren: () => import('./matbio/tip/tip.module').then( m => m.TipPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
