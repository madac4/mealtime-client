'use client';

import { formatPrice } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';

export type IOrder = {
    id: string;
    companyName: string;
    companyAddress: string;
    amount: number;
    phone: string;
    date: string;
};

export const columns: ColumnDef<IOrder>[] = [
    {
        accessorKey: 'companyName',
        header: 'Companie',
    },
    {
        accessorKey: 'companyAddress',
        header: 'Adresa',
    },
    {
        accessorKey: 'amount',
        header: 'Suma',
        cell: ({ getValue }) => {
            const amount = getValue<number>();
            const formattedAmount = formatPrice(amount);
            return <p className="text-green-700">+{formattedAmount} MDL</p>;
        },
    },
    {
        accessorKey: 'phone',
        header: 'Telefon',
    },
    {
        accessorKey: 'date',
        header: 'Data',
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
