import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngPageRoutingModule } from './ing-routing.module';

import { IngPage } from './ing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngPageRoutingModule
  ],
  declarations: [IngPage]
})
export class IngPageModule {}
