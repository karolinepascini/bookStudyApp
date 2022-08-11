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
    loadChildren: () => import('./bio/bio.module').then( m => m.BioPageModule)
  },
  {
    path: 'esp',
    loadChildren: () => import('./esp/esp.module').then( m => m.EspPageModule)
  },
  {
    path: 'filo',
    loadChildren: () => import('./filo/filo.module').then( m => m.FiloPageModule)
  },
  {
    path: 'fis',
    loadChildren: () => import('./fis/fis.module').then( m => m.FisPageModule)
  },
  {
    path: 'geo',
    loadChildren: () => import('./geo/geo.module').then( m => m.GeoPageModule)
  },
  {
    path: 'his',
    loadChildren: () => import('./his/his.module').then( m => m.HisPageModule)
  },
  {
    path: 'ing',
    loadChildren: () => import('./ing/ing.module').then( m => m.IngPageModule)
  },
  {
    path: 'port',
    loadChildren: () => import('./port/port.module').then( m => m.PortPageModule)
  },
  {
    path: 'mat',
    loadChildren: () => import('./mat/mat.module').then( m => m.MatPageModule)
  },
  {
    path: 'quim',
    loadChildren: () => import('./quim/quim.module').then( m => m.QuimPageModule)
  },
  {
    path: 'red',
    loadChildren: () => import('./red/red.module').then( m => m.RedPageModule)
  },
  {
    path: 'socio',
    loadChildren: () => import('./socio/socio.module').then( m => m.SocioPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
