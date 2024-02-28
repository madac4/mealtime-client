'use client';

import { DataTable } from './data-table';
import { columns } from './columns';
import { ICompanyQuery } from '@/@types/custom';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetCompaniesQuery } from '@/store/company/companyApi';
import { useEffect } from 'react';
import { useToast } from '@/hooks/useToast';

export default function Companies() {
    const { data } = useGetCompaniesQuery({}) as ICompanyQuery;

    return (
        <div className="orders py-10 mb-10">
            <div className="container">
                <Loading>
                    <DataTable columns={columns} data={data?.companies} />
                </Loading>
            </div>
        </div>
    );
}

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isLoading, error } = useGetCompaniesQuery({});

    useEffect(() => {
        useToast({ error });
    }, [error]);

    return (
        <>
            {isLoading || error ? (
                <div className="loading py-4">
                    <div className="flex justify-between">
                        <Skeleton className="w-64 h-12 rounded-lg mb-4" />
                        <Skeleton className="w-64 h-12 rounded-lg mb-4" />
                    </div>
                    <Skeleton className="w-full h-[500px] rounded-lg" />
                </div>
            ) : (
                <>{children}</>
            )}
        </>
    );
};
