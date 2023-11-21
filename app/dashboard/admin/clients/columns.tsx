'use client';

import { IUser } from '@/@types/custom';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<IUser>[] = [
    {
        accessorKey: 'company',
        header: 'Companie',
        cell: ({ row }) => {
            return row.original?.company?.name;
        },
    },
    {
        accessorKey: 'address',
        header: 'Adresa',
    },
    {
        accessorKey: 'UUID',
        header: 'UUID',
    },
    {
        accessorKey: 'phone',
        header: 'Telefon',
    },
    {
        accessorKey: 'login',
        header: 'Login',
    },
];
