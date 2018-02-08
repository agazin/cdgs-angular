import { Input } from '@angular/core';

import { BaseTableContainer } from './base-table-container';
import { StateAdaptor } from '../state-adaptor/state-adaptor';


export class EagerTableContainer<T> implements BaseTableContainer<T> {

    @Input() data: StateAdaptor<T>;

    rowClick() { }

    insertRow() { }

    deleteRow() { }

}
