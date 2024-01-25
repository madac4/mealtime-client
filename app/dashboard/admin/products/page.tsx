'use client';
import React from 'react';
import { columns } from './columns';
import { DataTable } from './data-table';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetProductsQuery } from '@/store/products/productsApi';

export default function Products() {
    const { data, isLoading } = useGetProductsQuery({});

    return (
        <>
            <div className="products py-10 mb-10">
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
                        data && <DataTable columns={columns} data={data.products} />
                    )}
                </div>
            </div>
        </>
    );
}
