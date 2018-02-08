import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStoreModule } from './store/app-store.module';

@NgModule({
  imports: [
    CommonModule,
    AppStoreModule,
  ],
  exports: [
    AppStoreModule,
  ],
  providers: [],
  declarations: []
})
export class AppSharedModule { }

