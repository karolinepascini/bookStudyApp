import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspPageRoutingModule } from './esp-routing.module';

import { EspPage } from './esp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspPageRoutingModule
  ],
  declarations: [EspPage]
})
export class EspPageModule {}
