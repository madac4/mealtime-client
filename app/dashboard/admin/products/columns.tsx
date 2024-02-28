import { IProduct } from '@/@types/custom';
import TableProductRemove from '@/components/table/TableProductRemove';
import { formatPrice } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

export const columns: ColumnDef<IProduct>[] = [
    {
        accessorKey: 'image',
        header: 'Imaginea',
        cell: ({ row }) => {
            return (
                <Image
                    width={56}
                    height={56}
                    src={row.original?.image?.url}
                    placeholder="blur"
                    blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
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
        cell: ({ row, table }) => {
            const product = row.original;

            return <TableProductRemove product={product} table={table} row={row} />;
        },
    },
];
