import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {
    FetchMenu,
    FETCH_MENU,
    FetchMenuFailure,
    FetchMenuSuccess
} from '../../actions/menu.action';
import { MenuService } from '../../../services/menu/menu.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuEffect {

    constructor(
        private action$: Actions,
        private menuService: MenuService,
    ) { }

    @Effect() fetchMenu$ = this.action$.ofType<FetchMenu>(FETCH_MENU)
        .switchMap(() =>
            this.menuService.mockupMenu()
                .map(response => new FetchMenuSuccess(response))
                .catch(() =>
                    Observable.of(new FetchMenuFailure())
                )
        );
}
