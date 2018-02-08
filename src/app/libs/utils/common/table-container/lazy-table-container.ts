import { LazyLoadEvent } from 'primeng/primeng';
import { BaseTableContainer } from './base-table-container';
import { EventEmitter, Output, Input } from '@angular/core';
import { StateAdaptor } from '../state-adaptor/state-adaptor';

export class LazyTableContainer<T> implements BaseTableContainer<T> {

    @Input() data: StateAdaptor<T> = {
        results: [],
        isFetching: false,
        invalidate: false,
        paginator: {
            offset: 0,
            limit: 5,
            count: 0
        },
        selectedData: <T>{},
        selectedList: [],
        result: <T>{},
    };

    @Output() onRowClick: EventEmitter<T> = new EventEmitter();

    @Output() onInsertRow: EventEmitter<T> = new EventEmitter();

    @Output() onDeleteRow: EventEmitter<T[]> = new EventEmitter();

    @Output() paginator: EventEmitter<{}> = new EventEmitter();

    @Output() sortable: EventEmitter<{}> = new EventEmitter();

    rowClick(event: { data: T }) {
        this.onRowClick.emit(event.data);
    }

    insertRow() {
        this.onInsertRow.emit();
    }

    deleteRow() {
        this.onDeleteRow.emit(this.data.selectedList);
    }

    lazyLoadData(event: LazyLoadEvent) {
        if (this.data.paginator.offset !== event.first) {
            this.paginator.emit(event);
        }
        if (event.sortField !== undefined) {
            this.sortable.emit(event);
        }

    }
}
