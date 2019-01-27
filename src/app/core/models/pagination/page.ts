import { Pageable } from './pageable';
import { Sort } from './sort';

export class Page<T> {

    content: T[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    first: boolean;
    sort: Sort;
    size: number;
    number: number;
    numberOfElements: number;
    empty: boolean;
}
