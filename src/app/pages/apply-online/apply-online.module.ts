import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyOnlinePageRoutingModule } from './apply-online-routing.module';

import { ApplyOnlinePage } from './apply-online.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyOnlinePageRoutingModule
  ],
  declarations: [ApplyOnlinePage]
})
export class ApplyOnlinePageModule {}
