import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { SortDirection, SortEvent } from './table.modal';


const rotate: Record<SortDirection, SortDirection> = {
	asc: 'desc',
	desc: '',
	'': 'asc',
};

@Directive({
	selector: 'th[appSortable]',
	host: {
		'(click)': 'rotate()',
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
	},
})
export class TableHeaderDirective<T> {
	@Input('appSortable') column: keyof T | '' = '';
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<SortEvent<T>>();

	rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.column, direction: this.direction });
	}
}
