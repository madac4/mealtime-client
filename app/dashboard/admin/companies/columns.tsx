'use client';

import { ICompany } from '@/@types/custom';
import TableCompanyRemove from '@/components/table/TableCompanyRemove';
import { ColumnDef } from '@tanstack/react-table';
export const columns: ColumnDef<ICompany>[] = [
    {
        accessorKey: 'name',
        header: 'Denumire Companie',
    },
    {
        accessorKey: 'address',
        header: 'Adresa',
    },
    {
        accessorKey: 'IDNO',
        header: 'IDNO',
    },
    {
        accessorKey: 'TVA',
        header: 'TVA',
    },
    {
        accessorKey: 'users',
        header: 'Puncte de livrare',
        cell: ({ row }) => {
            if (row.original.users) {
                return row.original.users.length;
            }
            return 0;
        },
    },
    {
        accessorKey: 'actions',
        header: '',
        cell: ({ row, table }) => {
            const company = row.original;

            return <TableCompanyRemove company={company} table={table} row={row} />;
        },
    },
];
