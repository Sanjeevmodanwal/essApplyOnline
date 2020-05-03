import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CounselorListPageRoutingModule } from './counselor-list-routing.module';

import { CounselorListPage } from './counselor-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CounselorListPageRoutingModule
  ],
  declarations: [CounselorListPage]
})
export class CounselorListPageModule {}
