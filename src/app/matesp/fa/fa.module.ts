import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaPageRoutingModule } from './fa-routing.module';

import { FaPage } from './fa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaPageRoutingModule
  ],
  declarations: [FaPage]
})
export class FaPageModule {}
