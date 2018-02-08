import { CommonResponse } from './../../models/common-response/common-response';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { CONTEXT_URL } from '../context-url/context-url';
import { RootState } from '../../models/root-state';
import { Observable } from 'rxjs/Observable';
import { ErrorMessage } from '../../store/actions/message.action';
import { AbstractHandler } from '../abstract-handler/abstract-handler';
import { Helpers } from '../../helpers/helpers';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StateAdaptor } from '../state-adaptor/state-adaptor';


@Injectable()
export class ServiceHandler<T> implements AbstractHandler {

    protected pathURI = '';

    constructor(
        @Inject(CONTEXT_URL) private contextURL: string,
        protected http$: HttpClient,
    ) {
    }

    findAll() {

        return this.findByCondition(<T>{});
    }

    findByCondition(condition: T) {
        const params = Helpers.mapModelToQueryParams(condition);
        return this.http$.get<CommonResponse<T>>(this.combineURL(), { params });
    }

    findById(id: number | string) {
        return this.http$.get<CommonResponse<T>>(this.combineURL(id));
    }

    add(body: T) {
        body = Helpers.mapModelToSaveParam(body);
        return this.http$.post<CommonResponse<T>>(this.combineURL(), body);
    }

    edit(body: T, id: number | string) {
        body = Helpers.mapModelToSaveParam(body);
        return this.http$.put<CommonResponse<T>>(this.combineURL(), body);
    }

    remove(id: number | string) {
        return this.http$.delete(this.combineURL(id));
    }

    removeList(body: number[]) {
        return this.http$.request('DELETE', this.combineURL(), {
            body,
        });
    }

    combineURL(pathParam?: number | string) {
        return `${this.contextURL}/${this.pathURI}${pathParam ? '/' + pathParam : ''}`;
    }

}
