'use client';

import React, { useEffect, useState } from 'react';
import { DataTable } from './data-table';
import { columns } from './columns';
import { ICompany } from '@/@types/custom';
import { axiosInstance } from '@/utils/axiosInstance';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetCompaniesQuery } from '@/store/company/companyApi';

export default function Companies() {
    const { data, error, isLoading, isSuccess } = useGetCompaniesQuery({}) as {
        data: {
            companies: ICompany[];
        };
        error: any;
        isLoading: boolean;
        isSuccess: boolean;
    };
    return (
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
                    <DataTable columns={columns} data={data.companies} />
                )}
            </div>
        </div>
    );
}
