import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demo001RoutingModule } from './demo001-routing.module';
import { UtilsModule } from '../../libs/utils/utils.module';
import { Demo001Component } from './demo001.component';
import { SearchProvinceComponent } from './pages/search-province/search-province.component';
import { ProvinceFormComponent } from './components/province-form/province-form.component';
import { ProvinceTableComponent } from './components/province-table/province-table.component';
import { ProvinceService } from './services/province/province.service';
import { EditProvinceComponent } from './pages/edit-province/edit-province.component';
import { AddProvinceComponent } from './pages/add-province/add-province.component';
import { AddProvinceFormComponent } from './components/add-province-form/add-province-form.component';
import { EditProvinceFormComponent } from './components/edit-province-form/edit-province-form.component';
import { DetailProvinceFormComponent } from './components/detail-province-form/detail-province-form.component';

@NgModule({
  imports: [
    CommonModule,
    Demo001RoutingModule,
    UtilsModule,
  ],
  declarations: [
    Demo001Component,
    SearchProvinceComponent,
    ProvinceFormComponent,
    ProvinceTableComponent,
    EditProvinceComponent,
    AddProvinceComponent,
    AddProvinceFormComponent,
    EditProvinceFormComponent,
    DetailProvinceFormComponent,
  ],
  providers: [ProvinceService],
})
export class Demo001Module { }
