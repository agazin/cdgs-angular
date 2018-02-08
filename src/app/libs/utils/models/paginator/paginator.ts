import { Uid } from './../uid/uid';

export interface Paginator extends Uid {

    limit?: number;
    offset?: number;
    count?: number;
    sorts?: string;
}
