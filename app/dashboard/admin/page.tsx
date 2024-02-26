'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, CreditCard, Package, Store } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useAdminCardAnalyticsQuery } from '@/store/analytics/analyticsApi';

export default function Dashboard() {
    const { data } = useAdminCardAnalyticsQuery({});

    return (
        <>
            <div className="dashboard py-5 mb-5">
                <div className="container">
                    <Loading>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Puncte de vânzare
                                    </CardTitle>
                                    <Store className="h-4 w-4 text-muted-foreground"></Store>
                                </CardHeader>
                                <CardContent>
                                    <div className="md:text-2xl xs:text-xl text-md font-bold">
                                        {data?.usersCount || 0}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Total puncte de vânzare active
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Comenzi</CardTitle>
                                    <CreditCard className="h-4 w-4 text-muted-foreground"></CreditCard>
                                </CardHeader>
                                <CardContent>
                                    <div className="md:text-2xl xs:text-xl text-md font-bold">
                                        {data?.ordersCount || 0}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Total comenzi efectuate
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Clienți</CardTitle>
                                    <Building2 className="h-4 w-4 text-muted-foreground"></Building2>
                                </CardHeader>
                                <CardContent>
                                    <div className="md:text-2xl xs:text-xl text-md font-bold">
                                        {data?.companiesCount || 0}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Total companii înregistrate
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Produse</CardTitle>
                                    <Package className="h-4 w-4 text-muted-foreground"></Package>
                                </CardHeader>
                                <CardContent>
                                    <div className="md:text-2xl xs:text-xl text-md font-bold">
                                        {data?.productsCount || 0}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Produse în vânzare
                                    </p>
                                </CardContent>
                            </Card>
                            {/* <Card className="col-span-2">
                                <CardHeader>
                                    <CardTitle>Vânzări recente</CardTitle>
                                    <CardDescription>
                                        Aveti 265 vânzări în ultimele 30 de zile
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RecentSales />
                                </CardContent>
                            </Card>
                            <Card className="col-span-2">
                                <CardHeader>
                                    <CardTitle>Suma comenzilor pe companie</CardTitle>
                                    <CardDescription>
                                        Suma totala a comenzilor create pe platforma Mealtime
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <BarChart
                                        data={chartdata}
                                        index="name"
                                        categories={['Suma comenzilor (MDL)']}
                                        showAnimation
                                        yAxisWidth={48}
                                    />
                                </CardContent>
                            </Card>
                            <Card className="lg:col-span-4 col-span-2">
                                <CardHeader>
                                    <CardTitle>Statistica vânzărilor pe lună</CardTitle>
                                    <CardDescription>
                                        Suma si numarul total al vânzărilor efectuate prin platforma
                                        MealTime
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <LineChart
                                        data={ordersStatistics}
                                        index="date"
                                        showAnimation
                                        connectNulls={true}
                                        colors={['green']}
                                        categories={['Nr. de comenzi', 'Venit din comenzi']}
                                        yAxisWidth={50}
                                    />
                                </CardContent>
                            </Card> */}
                        </div>
                    </Loading>
                </div>
            </div>
        </>
    );
}

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isLoading } = useAdminCardAnalyticsQuery({});
    return (
        <>
            {isLoading ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Skeleton className="h-full h-[130px]" />
                    <Skeleton className="h-full h-[130px]" />
                    <Skeleton className="h-full h-[130px]" />
                    <Skeleton className="h-full h-[130px]" />
                    <Skeleton className="col-span-2 h-[470px]" />
                    <Skeleton className="col-span-2 h-[470px]" />
                    <Skeleton className="lg:col-span-4 col-span-2 h-[440px]" />
                </div>
            ) : (
                <>{children}</>
            )}
        </>
    );
};
