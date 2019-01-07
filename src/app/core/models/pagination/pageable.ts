import { Sort } from './sort';

export class Pageable {
    sort: Sort;
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface PageableFilter {
    size: number;
    page: number;
}
