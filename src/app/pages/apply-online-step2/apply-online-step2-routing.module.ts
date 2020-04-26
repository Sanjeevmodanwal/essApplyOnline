import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyOnlineStep2Page } from './apply-online-step2.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyOnlineStep2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyOnlineStep2PageRoutingModule {}
