import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImunoPageRoutingModule } from './imuno-routing.module';

import { ImunoPage } from './imuno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImunoPageRoutingModule
  ],
  declarations: [ImunoPage]
})
export class ImunoPageModule {}
