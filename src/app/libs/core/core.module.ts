import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { FooterComponent } from '../utils/components/footer/footer.component';
import { HeaderComponent } from '../utils/components/header/header.component';
import { MessageComponent } from '../utils/components/message/message.component';
import { RootStoreModule } from '../utils/store/root-store.module';
import { UserPanelComponent } from '../utils/components/user-panel/user-panel.component';
import { AppShellComponent } from '../utils/components/app-shell/app-shell.component';
import { NotFoundComponent } from '../utils/components/not-found/not-found.component';
import { ClockComponent } from '../utils/components/clock/clock.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule.forRoot(),
  ],
  declarations: [
    AppShellComponent,
    HeaderComponent,
    FooterComponent,
    MessageComponent,
    UserPanelComponent,
    NotFoundComponent,
    ClockComponent,
  ],
  exports: [
    AppShellComponent,
    HeaderComponent,
    FooterComponent,
    RootStoreModule,
    MessageComponent,
    UserPanelComponent,
    NotFoundComponent,
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
