import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FisPageRoutingModule } from './fis-routing.module';

import { FisPage } from './fis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FisPageRoutingModule
  ],
  declarations: [FisPage]
})
export class FisPageModule {}
