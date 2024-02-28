'use client';
import React, { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from './data-table';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetUsersQuery } from '@/store/user/usersApi';
import { useToast } from '@/hooks/useToast';

export default function Clients() {
    const { data } = useGetUsersQuery({});

    return (
        <div className="orders py-10 mb-10">
            <div className="container">
                <Loading>
                    <DataTable columns={columns} data={data?.users} />
                </Loading>
            </div>
        </div>
    );
}

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isLoading, error } = useGetUsersQuery({});

    useEffect(() => {
        useToast({ error });
    }, [error]);
    return (
        <>
            {isLoading || error ? (
                <div className="loading py-4">
                    <div className="flex justify-between">
                        <Skeleton className="w-64 h-12 rounded-lg mb-4" />
                        <Skeleton className="w-44 h-12 rounded-lg mb-4" />
                    </div>
                    <Skeleton className="w-full h-[500px] rounded-lg" />
                </div>
            ) : (
                <>{children}</>
            )}
        </>
    );
};
