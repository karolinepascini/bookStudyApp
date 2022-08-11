import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiloPageRoutingModule } from './filo-routing.module';

import { FiloPage } from './filo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiloPageRoutingModule
  ],
  declarations: [FiloPage]
})
export class FiloPageModule {}
