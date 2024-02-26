'use client';
import { formatPhone } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export type IOrder = {
    id: string;
    companyName: string;
    companyAddress: string;
    amount: number;
    phone: string;
    date: string;
    products: [];
    customer: {
        phone: string;
        address: string;
        company: {
            name: string;
        };
    };
    createdAt: string;
};

export const columns: ColumnDef<IOrder>[] = [
    {
        accessorKey: 'company',
        header: 'Companie',
    },
    {
        accessorKey: 'address',
        header: 'Adresa',
    },
    {
        accessorKey: 'products',
        header: 'Nr. Produse',
    },
    {
        accessorKey: 'phone',
        header: 'Telefon',
        cell: ({ row }) => {
            const phone = row.original.phone;

            return (
                phone && (
                    <Link href={`tel:${phone}`} className="text-blue-500 underline">
                        {formatPhone(phone)}
                    </Link>
                )
            );
        },
    },
    {
        accessorKey: 'date',
        header: 'Data',
        cell: ({ row }) => {
            const datetime = new Date(row.original.createdAt);

            const formattedDate = datetime.toLocaleDateString('ro-RO');
            const formattedTime = datetime.toLocaleTimeString('ro-RO').slice(0, -3);

            return (
                <p>
                    {formattedDate} | {formattedTime}
                </p>
            );
        },
    },
];
