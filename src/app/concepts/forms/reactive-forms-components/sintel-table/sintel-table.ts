import {
    Component,
    Input,
    QueryList,
    ViewChildren,
    ViewChild,
    TemplateRef,
    AfterViewInit,
    OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPopoverModule, NgbPopover, NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faEraser, faSyncAlt, faEye, faHistory, faEdit, faFilter } from '@fortawesome/free-solid-svg-icons';
import { TableHeaderDirective } from './table-header.directive';
import { ColumnConfig, DateRangeFilter, RangeFilter, RowButton, SortDirection, SortEvent } from './table.modal';
import { SintelActionsModal } from './sintel-actions-modal/sintel-actions-modal';
@Component({
  selector: 'sintel-table',
   imports: [
        CommonModule,
        FormsModule,
        NgbPopoverModule,
        NgbPaginationModule,
        FontAwesomeModule,
    ],
  templateUrl: './sintel-table.html',
  styleUrl: './sintel-table.scss',
  standalone: true
})
export class SintelTable<T extends Record<string, any>>
    implements OnInit, AfterViewInit {

    @Input() data: T[] = [];
    @Input() columns: ColumnConfig<T>[] = [];

    faCoffee = faCoffee;
    faEraser = faEraser;
    faSyncAlt = faSyncAlt;
    faFilter = faFilter;

    displayData: T[] = [];
    selectedRows = new Set<T>();

    activeSort: SortEvent<T> = { column: '', direction: '' };

    filters: Partial<Record<keyof T, string>> = {};
    filterSelections: Partial<Record<keyof T, Set<string>>> = {};

    rangeFilters: Record<keyof T, RangeFilter> = {} as any;
    dateRangeFilters: Record<keyof T, DateRangeFilter> = {} as any;

    currentPage = 1;
    pageSize = 10;
    pageSizes = [5, 10, 25, 50];
    totalItems = 0;

    @ViewChildren(TableHeaderDirective)
    headers!: QueryList<TableHeaderDirective<T>>;

    @ViewChild('viewDetailsHeader') viewDetailsHeader!: TemplateRef<any>;
    @ViewChild('viewDetailsContent') viewDetailsContent!: TemplateRef<any>;
    @ViewChild('viewDetailsFooter') viewDetailsFooter!: TemplateRef<any>;

    @ViewChild('viewFileHeader') viewFileHeader!: TemplateRef<any>;
    @ViewChild('viewFileContent') viewFileContent!: TemplateRef<any>;
    @ViewChild('viewFileFooter') viewFileFooter!: TemplateRef<any>;

    @ViewChild('viewLogHeader') viewLogHeader!: TemplateRef<any>;
    @ViewChild('viewLogContent') viewLogContent!: TemplateRef<any>;
    @ViewChild('viewLogFooter') viewLogFooter!: TemplateRef<any>;

    templateMap: Record<string, {
        header: TemplateRef<any>;
        body: TemplateRef<any>;
        footer: TemplateRef<any>;
    }> = {};

    constructor(private modalService: NgbModal) {}

    ngOnInit() {
        this.columns.forEach(col => {
            this.rangeFilters[col.key] = {};
            if (col.filterType === 'dateRange') {
                this.dateRangeFilters[col.key] = {};
            }
        });

        this.applyAll();
    }

    ngAfterViewInit() {
        this.templateMap = {
            btn1: { header: this.viewDetailsHeader, body: this.viewDetailsContent, footer: this.viewDetailsFooter },
            btn2: { header: this.viewFileHeader, body: this.viewFileContent, footer: this.viewFileFooter },
            btn3: { header: this.viewLogHeader, body: this.viewLogContent, footer: this.viewLogFooter },
            };
    }

    onPageSizeChange() {
        this.currentPage = 1;
        this.applyAll();
    }

    get allSelected() {
        return this.displayData.length &&
            this.displayData.every(r => this.selectedRows.has(r));
    }

    get partiallySelected() {
        return this.displayData.some(r => this.selectedRows.has(r)) && !this.allSelected;
    }

    toggleAll(checked: boolean) {
        checked
            ? this.displayData.forEach(r => this.selectedRows.add(r))
            : this.selectedRows.clear();
    }

    toggleRow(row: T, checked: boolean) {
        checked ? this.selectedRows.add(row) : this.selectedRows.delete(row);
    }

    onSort(event: SortEvent<T>) {
        this.activeSort = event;
        this.currentPage = 1;

        this.headers.forEach(h => {
            if (h.column !== event.column) {
                h.direction = '';
            }
        });

        this.applyAll();
    }

    applySort(column: keyof T, direction: SortDirection) {
        this.activeSort = { column, direction };
        this.currentPage = 1;
        this.applyAll();
    }

    getFilteredValues(column: keyof T): string[] {
        const search = this.filters[column]?.toLowerCase() || '';
        return Array.from(new Set(this.data.map(r => String(r[column]))))
            .filter(v => v.toLowerCase().includes(search));
    }

    isAllSelected(column: keyof T): boolean {
        const all = this.getFilteredValues(column);
        const selected = this.filterSelections[column];
        return !!selected && all.length > 0 && all.every(v => selected.has(v));
    }

    toggleSelectAll(column: keyof T, checked: boolean) {
        if (!this.filterSelections[column]) {
            this.filterSelections[column] = new Set();
        }

        this.getFilteredValues(column).forEach(v =>
            checked
                ? this.filterSelections[column]!.add(v)
                : this.filterSelections[column]!.delete(v)
        );
    }

    toggleOption(column: keyof T, value: string, checked: boolean) {
        if (!this.filterSelections[column]) {
            this.filterSelections[column] = new Set();
        }

        checked
            ? this.filterSelections[column]!.add(value)
            : this.filterSelections[column]!.delete(value);
    }

    ensureRangeFilter(column: keyof T) {
        if (!this.rangeFilters[column]) {
            this.rangeFilters[column] = {};
        }
    }

    clearFilter(column: keyof T) {
        delete this.filters[column];
        delete this.filterSelections[column];
        delete this.rangeFilters[column];
        delete this.dateRangeFilters[column];
        this.currentPage = 1;
        this.applyAll();
    }

    onApply(column: keyof T, popover: NgbPopover) {
        this.currentPage = 1;
        this.applyAll();
        popover.close();
    }

    onCancel(column: keyof T, popover: NgbPopover) {
        this.clearFilter(column);
        popover.close();
    }

    applyAll() {
        let result = [...this.data];

        // checkbox filters
        for (const key of Object.keys(this.filterSelections) as (keyof T)[]) {
            const selected = this.filterSelections[key];
            if (selected?.size) {
                result = result.filter(r => selected.has(String(r[key])));
            }
        }

        // number range filters
        for (const key of Object.keys(this.rangeFilters) as (keyof T)[]) {
            const { start, end } = this.rangeFilters[key] || {};
            if (start !== undefined || end !== undefined) {
                result = result.filter(r => {
                    const v = Number(r[key]);
                    if (isNaN(v)) return false;
                    if (start !== undefined && v < start) return false;
                    if (end !== undefined && v > end) return false;
                    return true;
                });
            }
        }

        // date range filters
        for (const key of Object.keys(this.dateRangeFilters) as (keyof T)[]) {
            const { start, end } = this.dateRangeFilters[key] || {};
            if (start || end) {
                result = result.filter(r => {
                    const d = new Date(r[key]).getTime();
                    if (isNaN(d)) return false;
                    if (start && d < new Date(start).getTime()) return false;
                    if (end && d > new Date(end).getTime()) return false;
                    return true;
                });
            }
        }

        // sorting
        if (this.activeSort.column && this.activeSort.direction) {
            const { column, direction } = this.activeSort;
            result.sort((a, b) =>
                direction === 'asc'
                    ? a[column] > b[column] ? 1 : -1
                    : a[column] < b[column] ? 1 : -1
            );
        }

        // pagination
        this.totalItems = result.length;
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;

        this.displayData = result.slice(start, end);
    }

    getRowButtons(row: T): RowButton[] {
        return [
            { key: 'btn1', label: 'View Details', type: 'primary', contentType: 'details', icon: faEye },
            { key: 'btn2', label: 'View History', type: 'success', contentType: 'history', icon: faHistory },
            { key: 'btn3', label: 'Edit', type: 'warning', contentType: 'edit', icon: faEdit }
        ];
    }

    openActionsViewModal(row: T, btn: RowButton) {
        const templates = this.templateMap[btn.key];
        if (!templates) return;

        const modalRef = this.modalService.open(SintelActionsModal, {
            centered: true,
            size: 'lg'
        });

        modalRef.componentInstance.modalHeader = templates.header;
        modalRef.componentInstance.modalBody = templates.body;
        modalRef.componentInstance.modalFooter = templates.footer;
        modalRef.componentInstance.modalContext = { row };
    }
}
