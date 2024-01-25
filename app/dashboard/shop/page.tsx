'use client';

import React from 'react';
import ProductsGrid from '../../../components/sections/ProductsGrid';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetProductsQuery } from '@/store/products/productsApi';

export default function Shop() {
    return (
        <div className="container">
            <Loading>
                <div className="h-80 overflow-clip bg-black bg-opacity-50 my-10 rounded-lg relative text-center flex items-center justify-center">
                    <img
                        src="https://mealtime.ro/storage/products/August2020/FiOIa7RAF3b6LKXcAFvK.jpg"
                        className="absolute -z-10 w-full"
                    />
                    <h1 className="text-white">Mai mult decât un simplu ceai</h1>
                </div>
            </Loading>

            <div className="products mb-32 flex flex-col items-center">
                <ProductsGrid />
            </div>
        </div>
    );
}

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isLoading } = useGetProductsQuery({});
    return (
        <>{isLoading ? <Skeleton className="w-full h-80 rounded-lg my-10" /> : <>{children}</>}</>
    );
};
