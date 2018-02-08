import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { LovService } from '../../../services/lov/lov.service';
import { FetchLovConfig, FETCH_LOV_CONFIG, FetchLovCOnfigFailure, FetchLovConfigSuccess } from '../../actions/lov.action';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LovEffect {

    constructor(
        private actions$: Actions,
        private lovService: LovService,
    ) { }

    @Effect() initLovConfig$ = this.actions$.ofType<FetchLovConfig>(FETCH_LOV_CONFIG)
        .mergeMap(() =>
            this.lovService
                .getLovConfig()
                .map((result) => new FetchLovConfigSuccess(result))
                .catch(() => Observable.of(new FetchLovCOnfigFailure()))
        );
}

