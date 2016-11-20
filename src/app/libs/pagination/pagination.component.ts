import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

    private _pages: Page[];
    private _currentPage: number;
    private _totalElements: number;

    @Input() perPage: number = 10;
    @Input() maxSize: number = 10;

    @Output() page = new EventEmitter();

    @Input() set currentPage(currentPage: number) {
        this._currentPage = currentPage;
        this._pages = this.calculatePages(this._currentPage, this.perPage, this._totalElements, this.maxSize);
    }

    @Input() set totalElements(totalElements: number) {
        this._totalElements = totalElements;
        this._pages = this.calculatePages(this._currentPage, this.perPage, this._totalElements, this.maxSize);
    }

    viewPage(page: number) {
        if (page >= 1 && page <= this.getLastPage()) {
            this.page.emit(page);
        }
    }

    protected isFirstPage(): boolean {
        return this._currentPage == 1;
    }

    protected isLastPage(): boolean {
        return this._currentPage == this.getLastPage();
    }

    protected getLastPage(): number {
        if (this._totalElements < 1) {
            return 1;
        }
        return Math.ceil(this._totalElements / this.perPage);
    }


    constructor() {
    }

    ngOnInit() {

    }

    private calculatePages(currentPage: number, perPage: number, totalElements: number, maxSize: number): Page[] {
        if (currentPage === undefined) {
            return [];
        }

        if (totalElements === undefined) {
            return [];
        }

        let pages = [];
        const totalPages = Math.ceil(totalElements / perPage);
        const halfWay = Math.ceil(maxSize / 2);

        const isStart = currentPage <= halfWay;
        const isEnd = totalPages - halfWay < currentPage;
        const isMiddle = !isStart && !isEnd;

        let ellipsesNeeded = maxSize < totalPages;
        let i = 1;

        while (i <= totalPages && i <= maxSize) {
            let label;
            let pageNumber = this.calculatePageNumber(i, currentPage, maxSize, totalPages);
            let openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            let closingEllipsesNeeded = (i === maxSize - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            } else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    }

    /**
     * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that
     * position.
     *
     * @param i
     * @param currentPage
     * @param paginationRange
     * @param totalPages
     * @returns {number}
     */
    private calculatePageNumber(i: number, currentPage: number, paginationRange: number, totalPages: number): number {
        let halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        } else if (i === 1) {
            return i;
        } else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            } else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            } else {
                return i;
            }
        } else {
            return i;
        }
    }
}

export interface Page {
    label: string;
    value: number;
}