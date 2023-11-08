'use client';

import { axiosInstance } from '@/utils/axiosInstance';
import React, { useEffect, useState } from 'react';
import Product from '../blocks/Product';
import { Skeleton } from '../ui/skeleton';
import { IProduct } from '@/@types/custom';

export default function ProductsGrid({
    loading,
    setLoading,
}: {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [products, setProducts] = useState<IProduct[]>([]);

    const handleProducts = async () => {
        await axiosInstance.get('/get-products').then((res) => {
            if (res.data.success) {
                setProducts(res.data.products);
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
    };

    useEffect(() => {
        handleProducts();
    }, []);

    return (
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {loading ? (
                <>
                    <Skeleton className="p-5 rounded-md w-full h-[500px]" />
                    <Skeleton className="p-5 rounded-md w-full h-[500px]" />
                    <Skeleton className="p-5 rounded-md w-full h-[500px]" />
                    <Skeleton className="p-5 rounded-md w-full h-[500px]" />
                    <Skeleton className="p-5 rounded-md w-full h-[500px]" />
                    <Skeleton className="p-5 rounded-md w-full h-[500px]" />
                </>
            ) : products.length > 0 ? (
                products.map((product) => <Product key={product._id} product={product} />)
            ) : (
                <h1 className="text-center md:col-span-3 sm:col-span-2 col-span-1">
                    Nu există produse
                </h1>
            )}
        </div>
    );
}
