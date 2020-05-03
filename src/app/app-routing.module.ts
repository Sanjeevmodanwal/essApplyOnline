import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'apply-online',
    loadChildren: () => import('./pages/apply-online/apply-online.module').then( m => m.ApplyOnlinePageModule)
  },
  {
    path: 'apply-online-step2',
    loadChildren: () => import('./pages/apply-online-step2/apply-online-step2.module').then( m => m.ApplyOnlineStep2PageModule)
  },
  {
    path: 'counselor-list',
    loadChildren: () => import('./pages/counselor-list/counselor-list.module').then( m => m.CounselorListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
