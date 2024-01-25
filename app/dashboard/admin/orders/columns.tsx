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
        accessorKey: 'companyName',
        header: 'Companie',
        cell: ({ row }) => {
            const companyName = row.original.customer?.company?.name;

            return <p>{companyName && companyName}</p>;
        },
    },
    {
        accessorKey: 'address',
        header: 'Adresa',
        cell: ({ row }) => {
            const address = row.original.customer?.address;
            return <p>{address && address}</p>;
        },
    },
    {
        accessorKey: 'products',
        header: 'Nr. Produse',
        cell: ({ row }) => {
            const products = row.original.products.length;

            return <p>{products}</p>;
        },
    },
    {
        accessorKey: 'phone',
        header: 'Telefon',
        cell: ({ row }) => {
            const phone = row.original.customer?.phone;

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
    // {
    //     id: 'actions',
    //     cell: ({ row }) => (
    //         <Button size="icon" variant="outline" className="outline-none">
    //             <EyeIcon className="h-5 w-5"> </EyeIcon>
    //         </Button>
    //     ),
    // },
];
