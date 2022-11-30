import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompvPageRoutingModule } from './compv-routing.module';

import { CompvPage } from './compv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompvPageRoutingModule
  ],
  declarations: [CompvPage]
})
export class CompvPageModule {}
