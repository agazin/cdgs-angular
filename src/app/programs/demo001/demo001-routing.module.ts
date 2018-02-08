import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo001Component } from './demo001.component';
import { SearchProvinceComponent } from './pages/search-province/search-province.component';
import { AddProvinceComponent } from './pages/add-province/add-province.component';
import { EditProvinceComponent } from './pages/edit-province/edit-province.component';

const routes: Routes = [
  {
    path: '',
    component: Demo001Component,
    children: [
      {
        path: 'search',
        component: SearchProvinceComponent,
      },
      {
        path: 'add',
        component: AddProvinceComponent,
      },
      {
        path: 'edit',
        component: EditProvinceComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demo001RoutingModule { }
