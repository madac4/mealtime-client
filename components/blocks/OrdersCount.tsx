'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CreditCard } from 'lucide-react';
import { useOrdersCountQuery } from '@/store/analytics/analyticsApi';
import { Skeleton } from '../ui/skeleton';

export default function OrdersCount() {
    const { data, error } = useOrdersCountQuery({});

    console.log(error);
    return (
        <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Comenzi Efectuate</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground"></CreditCard>
            </CardHeader>
            <CardContent>
                <Loading>
                    <div className="md:text-2xl xs:text-xl text-md font-bold">
                        {data && data.orderCount}
                    </div>
                </Loading>
                {/* <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-600">+12%</span> de luna trecută
            </p> */}
            </CardContent>
        </Card>
    );
}

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isLoading } = useOrdersCountQuery({});
    return (
        <>
            {isLoading ? (
                <>
                    <Skeleton className="w-10 h-10" />
                </>
            ) : (
                <>{children}</>
            )}
        </>
    );
};
