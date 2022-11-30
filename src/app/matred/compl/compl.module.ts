import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplPageRoutingModule } from './compl-routing.module';

import { ComplPage } from './compl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplPageRoutingModule
  ],
  declarations: [ComplPage]
})
export class ComplPageModule {}
