import { EventEmitter, Input } from '@angular/core';
import { StateAdaptor } from '../state-adaptor/state-adaptor';

export abstract class BaseTableContainer<T> {

    data: StateAdaptor<T>;

    onRowClick?: EventEmitter<T>;

    onInsertRow?: EventEmitter<T>;

    onDeleteRow?: EventEmitter<T[]>;

    abstract rowClick(event: { data: T });

    abstract insertRow(data);

    abstract deleteRow();

}
