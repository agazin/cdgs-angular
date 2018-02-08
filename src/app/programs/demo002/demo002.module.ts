import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demo002RoutingModule } from './demo002-routing.module';
import { UtilsModule } from '../../libs/utils/utils.module';
import { Demo002Component } from './demo002.component';

@NgModule({
  imports: [
    CommonModule,
    Demo002RoutingModule,
    UtilsModule
  ],
  declarations: [Demo002Component]
})
export class Demo002Module { }
