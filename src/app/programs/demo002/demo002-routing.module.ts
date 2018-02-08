import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo002Component } from './demo002.component';

const routes: Routes = [
  {
    path: '',
    component: Demo002Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Demo002RoutingModule { }
