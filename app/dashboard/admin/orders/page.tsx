'use client';
import { DataTable } from './data-table';
import { columns } from './columns';
import { useGetOrdersQuery } from '@/store/order/orderApi';
import { Skeleton } from '@/components/ui/skeleton';

export default function Orders() {
    const { data, error, isLoading } = useGetOrdersQuery({});

    return (
        <>
            <div className="orders py-10 mb-10">
                <div className="container">
                    {isLoading ? (
                        <div className="loading py-4">
                            <div className="flex justify-between">
                                <Skeleton className="w-64 h-12 rounded-lg mb-4" />
                                <Skeleton className="w-44 h-12 rounded-lg mb-4" />
                            </div>
                            <Skeleton className="w-full h-screen rounded-lg" />
                        </div>
                    ) : (
                        data && <DataTable columns={columns} data={data.orders} />
                    )}
                </div>
            </div>
        </>
    );
}
