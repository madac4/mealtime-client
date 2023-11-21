'use client';
import React, { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from './data-table';
import { axiosInstance } from '@/utils/axiosInstance';
import { IProduct } from '@/@types/custom';
import { Skeleton } from '@/components/ui/skeleton';

export default function Products() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getProducts = async () => {
        await axiosInstance.get('/get-products').then((res) => {
            if (res.data.success) {
                setProducts(res.data.products);
                setLoading(false);
            }
        });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div className="products py-10 mb-10">
                <div className="container">
                    {loading ? (
                        <div className="loading py-4">
                            <div className="flex justify-between">
                                <Skeleton className="w-64 h-12 rounded-lg mb-4" />
                                <Skeleton className="w-44 h-12 rounded-lg mb-4" />
                            </div>
                            <Skeleton className="w-full h-screen rounded-lg" />
                        </div>
                    ) : (
                        <DataTable columns={columns} data={products} />
                    )}
                </div>
            </div>
        </>
    );
}
