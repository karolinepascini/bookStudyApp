import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MmPageRoutingModule } from './mm-routing.module';

import { MmPage } from './mm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MmPageRoutingModule
  ],
  declarations: [MmPage]
})
export class MmPageModule {}
