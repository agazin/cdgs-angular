import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RootReducer } from './reducers';
import { ReportEffect } from './effects/report/report.effect';
import { MenuEffect } from './effects/menu/menu.effect';
import { ReportReducer } from './reducers/report.reducer';
import { MessageReducer } from './reducers/message.reducer';
import { ProgramModeReducer } from './reducers/program-mode.reducer';
import { MenuReducer } from './reducers/menu.reducer';
import { UserReducer } from './reducers/user.reducer';
import { LovEffect } from './effects/lov/lov.effect';

@NgModule({
    imports: [
        StoreModule.forRoot(RootReducer),
        EffectsModule.forRoot([
            ReportEffect,
            MenuEffect,
            LovEffect,
        ])
    ],
    exports: [
        StoreModule,
        EffectsModule
    ],
})
export class RootStoreModule {

}

