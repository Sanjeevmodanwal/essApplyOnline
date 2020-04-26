import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyOnlineStep2PageRoutingModule } from './apply-online-step2-routing.module';

import { ApplyOnlineStep2Page } from './apply-online-step2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyOnlineStep2PageRoutingModule
  ],
  declarations: [ApplyOnlineStep2Page]
})
export class ApplyOnlineStep2PageModule {}
