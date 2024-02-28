'use client';

import { IUser } from '@/@types/custom';
import TableUserRemove from '@/components/table/TableUserRemove';
import { formatPhone } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export const columns: ColumnDef<IUser>[] = [
    {
        accessorKey: 'company',
        header: 'Companie',
        cell: ({ row }) => {
            if (row.original?.company?.name === undefined) {
                return row.original.company;
            }
            return row.original?.company?.name;
        },
    },
    {
        accessorKey: 'address',
        header: 'Adresa',
    },
    {
        accessorKey: 'person',
        header: 'Persoana de contact',
    },
    {
        accessorKey: 'UUID',
        header: 'UUID',
    },
    {
        accessorKey: 'phone',
        header: 'Telefon',
        cell: ({ row }) => {
            const user = row.original;
            return (
                <Link href={`tel:${user.phone}`} className="text-blue-500 underline">
                    {formatPhone(user.phone)}
                </Link>
            );
        },
    },
    {
        accessorKey: 'login',
        header: 'Login',
    },
    {
        accessorKey: 'actions',
        header: '',
        cell: ({ row, table }) => {
            const user = row.original;

            return <TableUserRemove user={user} table={table} row={row} />;
        },
    },
];
