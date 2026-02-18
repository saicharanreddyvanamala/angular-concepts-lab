import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ColumnConfig, TableData } from '../table.modal';
import { SintelTable } from '../sintel-table';

@Component({
  selector: 'app-use-table',
  imports: [SintelTable],
  templateUrl: './use-table.html',
  styleUrl: './use-table.scss',
})
export class UseTable {
    @ViewChild('viewPrintHeader') viewPrintHeader!: TemplateRef<any>;

    @ViewChild('viewPrintContent') viewPrintContent!: TemplateRef<any>;

    @ViewChild('viewPrintFooter') viewPrintFooter!: TemplateRef<any>;





    countries: TableData[] = [

        { id: 1, name: 'Russia', area: 17075200, population: 146989754, createdAt: '2023-01-15' },

        { id: 2, name: 'Canada', area: 9976140, population: 36624199, createdAt: '2023-01-18' },

        { id: 3, name: 'China', area: 9596961, population: 1412600000, createdAt: '2023-01-23' },

        { id: 4, name: 'United States', area: 9833517, population: 331893745, createdAt: '2023-01-31' },

        { id: 5, name: 'Brazil', area: 8515767, population: 214326223, createdAt: '2023-01-15' },

        { id: 6, name: 'Australia', area: 7692024, population: 26014399, createdAt: '2023-01-15' },

        { id: 7, name: 'India', area: 3287263, population: 1428627663, createdAt: '2023-01-15' },

        { id: 8, name: 'Argentina', area: 2780400, population: 45808747, createdAt: '2023-01-15' },

        { id: 9, name: 'Kazakhstan', area: 2724900, population: 19600000, createdAt: '2023-01-15' },

        { id: 10, name: 'Algeria', area: 2381741, population: 44700000, createdAt: '2023-01-15' },

        { id: 11, name: 'Mexico', area: 1964375, population: 129150971, createdAt: '2023-01-15' },

        { id: 12, name: 'Indonesia', area: 1904569, population: 277534122, createdAt: '2023-01-15' },

        { id: 13, name: 'Saudi Arabia', area: 2149690, population: 36947025, createdAt: '2023-01-15' },

        { id: 14, name: 'South Africa', area: 1221037, population: 60414495, createdAt: '2023-01-15' },

        { id: 15, name: 'Egypt', area: 1002450, population: 112716598, createdAt: '2023-01-15' }

    ];



    columns: ColumnConfig<TableData>[] = [

        { key: 'id', label: '#', sortable: true },



        { key: 'name', label: 'Country', sortable: true, filterable: true, filterType: 'text' },



        { key: 'area', label: 'Area', sortable: true, filterable: true, filterType: 'number' },



        { key: 'population', label: 'Population', sortable: true, filterable: true, filterType: 'number' },



        {

            key: 'createdAt',

            label: 'Created Date',

            sortable: true,

            filterable: true,

            filterType: 'dateRange'

        }

    ];
}
