import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './libs/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BROWSER_LOCAL_STORAGE } from './libs/utils/common/local-storage/local-storage.provider';
import { REST_CONTEXT_URL } from './libs/utils/common/context-url/context-url';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    BROWSER_LOCAL_STORAGE,
    REST_CONTEXT_URL,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
