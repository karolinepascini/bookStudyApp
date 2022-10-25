import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcpPageRoutingModule } from './icp-routing.module';

import { IcpPage } from './icp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcpPageRoutingModule
  ],
  declarations: [IcpPage]
})
export class IcpPageModule {}
