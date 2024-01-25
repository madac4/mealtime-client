import { IProduct } from '@/@types/custom';
import TableProductRemove from '@/components/TableProductRemove';
import { formatPrice } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';

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

            return <TableProductRemove product={product} />;
        },
    },
];
