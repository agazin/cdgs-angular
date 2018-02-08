import { Paginator } from '../../models/paginator/paginator';
import { Observable } from 'rxjs/Observable';

export abstract class StateAdaptor<T> {
    results?: T[] | Observable<T[]>;
    result?: T | Observable<T>;
    isFetching?: boolean;
    invalidate?: boolean;
    paginator?: Paginator;
    selectedData?: T;
    selectedList?: T[];
    tempData?: T;
    tempDataList?: T[];
}
