import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerarPageRoutingModule } from './gerar-routing.module';

import { GerarPage } from './gerar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerarPageRoutingModule
  ],
  declarations: [GerarPage]
})
export class GerarPageModule {}
