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
    path: 'biologia',
    loadChildren: () => import('./materia/bio/bio.module').then( m => m.BioPageModule)
  },
  {
    path: 'espanhol',
    loadChildren: () => import('./materia/esp/esp.module').then( m => m.EspPageModule)
  },
  {
    path: 'filosofia',
    loadChildren: () => import('./materia/filo/filo.module').then( m => m.FiloPageModule)
  },
  {
    path: 'fisica',
    loadChildren: () => import('./materia/fis/fis.module').then( m => m.FisPageModule)
  },
  {
    path: 'geografia',
    loadChildren: () => import('./materia/geo/geo.module').then( m => m.GeoPageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./materia/his/his.module').then( m => m.HisPageModule)
  },
  {
    path: 'ingles',
    loadChildren: () => import('./materia/ing/ing.module').then( m => m.IngPageModule)
  },
  {
    path: 'lp',
    loadChildren: () => import('./materia/port/port.module').then( m => m.PortPageModule)
  },
  {
    path: 'matematica',
    loadChildren: () => import('./materia/mat/mat.module').then( m => m.MatPageModule)
  },
  {
    path: 'quimica',
    loadChildren: () => import('./materia/quim/quim.module').then( m => m.QuimPageModule)
  },
  {
    path: 'redacao',
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
  },
  {
    path: 'tip',
    loadChildren: () => import('./matbio/tip/tip.module').then( m => m.TipPageModule)
  },
  {
    path: 'compl',
    loadChildren: () => import('./matred/compl/compl.module').then( m => m.ComplPageModule)
  },
  {
    path: 'compll',
    loadChildren: () => import('./matred/compll/compll.module').then( m => m.CompllPageModule)
  },
  {
    path: 'complll',
    loadChildren: () => import('./matred/complll/complll.module').then( m => m.ComplllPageModule)
  },
  {
    path: 'complv',
    loadChildren: () => import('./matred/complv/complv.module').then( m => m.ComplvPageModule)
  },
  {
    path: 'compv',
    loadChildren: () => import('./matred/compv/compv.module').then( m => m.CompvPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
