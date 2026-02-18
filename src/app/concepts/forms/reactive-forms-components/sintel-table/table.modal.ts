import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type SortDirection = 'asc' | 'desc' | '';

export interface SortEvent<T> {
	column: keyof T | '';
	direction: SortDirection;
}

export interface ColumnConfig<T> {
	key: keyof T;
	label: string;
	sortable?: boolean;
	filterable?: boolean;
	filterType?: 'text' | 'number' | 'dateRange';
	rowActions?: RowAction<T>[];
}

export interface RangeFilter {
	start?: number;
	end?: number;
}

export interface DateRangeFilter {
    start?: string;
    end?: string;
}

export interface RowAction<T> {
    label: string;
    class?: string;
    action: (row: T) => void;
}

export interface TableData {
	id: number;
	name: string;
	area: number;
	population: number;
	createdAt: string;
}

export interface RowButton {
	label: string;
	type?: 'primary' | 'success' | 'warning' | 'danger';
	contentType: 'details' | 'history' | 'edit';
	icon?: IconDefinition;
	key: 'btn1' | 'btn2' | 'btn3' ;
  }
