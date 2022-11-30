import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompllPageRoutingModule } from './compll-routing.module';

import { CompllPage } from './compll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompllPageRoutingModule
  ],
  declarations: [CompllPage]
})
export class CompllPageModule {}
