import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuimPageRoutingModule } from './quim-routing.module';

import { QuimPage } from './quim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuimPageRoutingModule
  ],
  declarations: [QuimPage]
})
export class QuimPageModule {}
