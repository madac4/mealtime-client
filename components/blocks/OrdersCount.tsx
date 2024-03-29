'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Package } from 'lucide-react';
import { useUserCardAnalyticsQuery } from '@/store/analytics/analyticsApi';
import { Skeleton } from '../ui/skeleton';

export default function OrdersCount({ className }: { className?: string }) {
    const { data } = useUserCardAnalyticsQuery({});

    return (
        <Card className={className}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Comenzi Efectuate</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground"></Package>
            </CardHeader>
            <CardContent>
                <Loading>
                    <div className="md:text-2xl xs:text-xl text-md font-bold">
                        {data?.userOrders}
                    </div>
                </Loading>
                <p className="text-xs text-muted-foreground mt-1">Numărul de comenzi efectuate</p>
            </CardContent>
        </Card>
    );
}

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isLoading } = useUserCardAnalyticsQuery({});
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
