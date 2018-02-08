import { Paginator } from '../paginator/paginator';

export interface CommonResponse<T> {
    results?: T[];
    result?: T;
    paginator?: Paginator;
}
