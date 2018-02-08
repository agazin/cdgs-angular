import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { APP_BASE_HREF } from '@angular/common';

import { RootReducer } from './reducers/root.reducer';


@NgModule({
    imports: [
        StoreModule.forFeature('app', RootReducer),
        EffectsModule.forFeature([
        ]),
    ],
    exports: [
        StoreModule,
        EffectsModule,
    ],
    providers: [
    ]
})
export class AppStoreModule { }
