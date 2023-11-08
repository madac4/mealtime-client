'use client';

import { IProduct } from '@/@types/custom';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { axiosInstance } from '@/utils/axiosInstance';
import { ColumnDef } from '@tanstack/react-table';
import { Trash2 } from 'lucide-react';

export const columns: ColumnDef<IProduct>[] = [
    {
        accessorKey: 'image',
        header: 'Imaginea',
        cell: ({ row }) => {
            return (
                <img
                    src={row.original.image.url}
                    alt={row.original.name}
                    className="h-14 w-14 rounded-sm object-cover"
                />
            );
        },
    },
    {
        accessorKey: 'name',
        header: 'Denumirea',
    },
    {
        accessorKey: 'packageInfo',
        header: 'Info Cutie',
    },
    {
        accessorKey: 'packageSize',
        header: 'Unități în cutie',
    },
    {
        accessorKey: 'UUID',
        header: 'UUID',
    },
    {
        accessorKey: 'price',
        header: 'Preț',
        cell: ({ getValue }) => {
            const amount = getValue<number>();
            return `${formatPrice(amount)} MDL`;
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const product = row.original;

            const deleteProduct = async (id: string) => {
                alert(id)
                console.log(id);
            };
            return (
                <Button
                    size="icon"
                    variant="outline"
                    className="outline-none"
                    onClick={() => {
                        deleteProduct(product._id);
                    }}>
                    <Trash2 className="h-5 w-5 text-red-600"> </Trash2>
                </Button>
            );
        },
    },
    // {
    //     id: 'actions',
    //     cell: ({ row }) => {
    //         const product = row.original;
    //         return (
    //             <DropdownMenu>
    //                 <DropdownMenuTrigger asChild>
    //                     <Button variant="outline" size="icon" className="outline-none">
    //                         <MoreHorizontal className="h-4 w-4" />
    //                     </Button>
    //                 </DropdownMenuTrigger>
    //                 <DropdownMenuContent align="end">
    //                     <DropdownMenuLabel>Acțiuni</DropdownMenuLabel>
    //                     <DropdownMenuItem>Editează produsul</DropdownMenuItem>
    //                     <DropdownMenuSeparator />
    //                     <DropdownMenuItem
    //                         className="text-red-500"
    //                         onClick={() => deleteProduct(product._id)}>
    //                         Șterge produsul
    //                     </DropdownMenuItem>
    //                 </DropdownMenuContent>
    //             </DropdownMenu>
    //         );
    //     },
    // },
];
