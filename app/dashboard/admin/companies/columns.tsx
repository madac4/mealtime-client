'use client';

import { ICompany } from '@/@types/custom';
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
            return row.original.users.length
        },
    },
];
