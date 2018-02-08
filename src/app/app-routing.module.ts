import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './libs/utils/auth/auth.guard';
import { AppShellComponent } from './libs/utils/components/app-shell/app-shell.component';
import { NotFoundComponent } from './libs/utils/components/not-found/not-found.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppShellComponent,
  //   children: [
  //   ]
  // },
  {
    path: 'demo001',
    loadChildren: './programs/demo001/demo001.module#Demo001Module',
  },
  {
    path: 'demo002',
    loadChildren: './programs/demo002/demo002.module#Demo002Module'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
