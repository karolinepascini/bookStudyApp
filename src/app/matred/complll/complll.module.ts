import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplllPageRoutingModule } from './complll-routing.module';

import { ComplllPage } from './complll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplllPageRoutingModule
  ],
  declarations: [ComplllPage]
})
export class ComplllPageModule {}
