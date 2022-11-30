import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplvPageRoutingModule } from './complv-routing.module';

import { ComplvPage } from './complv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplvPageRoutingModule
  ],
  declarations: [ComplvPage]
})
export class ComplvPageModule {}
