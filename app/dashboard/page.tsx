import RecentSales from '@/components/blocks/RecentSales';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, CreditCard, DollarSign, Package } from 'lucide-react';
import { Metadata } from 'next';
import { BarChart, LineChart } from '@tremor/react';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'MealTime dasbhoard for clients',
};

export default function Dashboard() {
    const chartdata = [
        {
            name: 'Rompetrrol',
            'Suma comenzilor (MDL)': 126261,
        },
        {
            name: 'Vento',
            'Suma comenzilor (MDL)': 29632,
        },
        {
            name: 'Petrom',
            'Suma comenzilor (MDL)': 78251,
        },
        {
            name: 'Bemol',
            'Suma comenzilor (MDL)': 51521,
        },
        {
            name: 'Avante',
            'Suma comenzilor (MDL)': 15237,
        },
        {
            name: 'Lukoil',
            'Suma comenzilor (MDL)': 20236,
        },
        {
            name: 'Now',
            'Suma comenzilor (MDL)': 12032,
        },
    ];

    const ordersStatistics = [
        {
            date: 'Ian 23',
            'Nr. de comenzi': 12,
            'Venit din comenzi': 12592,
        },
        { date: 'Feb 23', 'Nr. de comenzi': 18, 'Venit din comenzi': 28920 },
        { date: 'Mar 23', 'Nr. de comenzi': 22, 'Venit din comenzi': 14830 },
        { date: 'Apr 23', 'Nr. de comenzi': 17, 'Venit din comenzi': 16200 },
        { date: 'Mai 23', 'Nr. de comenzi': 20, 'Venit din comenzi': 27340 },
        { date: 'Iun 23', 'Nr. de comenzi': 15, 'Venit din comenzi': 13050 },
        { date: 'Iul 23', 'Nr. de comenzi': 48, 'Venit din comenzi': 52760 },
        { date: 'Aug 23', 'Nr. de comenzi': 19, 'Venit din comenzi': 15080 },
        { date: 'Sep 23', 'Nr. de comenzi': 21, 'Venit din comenzi': 19590 },
        { date: 'Oct 23', 'Nr. de comenzi': 11, 'Venit din comenzi': 12550 },
        { date: 'Noi 23', 'Nr. de comenzi': 62, 'Venit din comenzi': 65927 },
        { date: 'Dec 23', 'Nr. de comenzi': null, 'Venit din comenzi': null },
    ];

    return (
        <>
            {/* <h1 className="py-20 text-center">Dashboard în dezvoltare</h1> */}

            <div className="dashboard py-5">
                <div className="container">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Venit Total</CardTitle>
                                <DollarSign className="h-4 w-4 text-muted-foreground"></DollarSign>
                            </CardHeader>
                            <CardContent>
                                <div className="md:text-2xl text-xl font-bold">45.231,89 MDL</div>
                                <p className="text-xs text-muted-foreground">
                                    <span className="text-green-600">+20.1%</span> de luna trecută
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Comenzi</CardTitle>
                                <CreditCard className="h-4 w-4 text-muted-foreground"></CreditCard>
                            </CardHeader>
                            <CardContent>
                                <div className="md:text-2xl text-xl font-bold">5.291</div>
                                <p className="text-xs text-muted-foreground">
                                    <span className="text-green-600">+69.1%</span> de luna trecută
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Clienți</CardTitle>
                                <Building2 className="h-4 w-4 text-muted-foreground"></Building2>
                            </CardHeader>
                            <CardContent>
                                <div className="md:text-2xl text-xl font-bold">82</div>
                                <p className="text-xs text-muted-foreground">
                                    <span className="text-green-600">+30</span> de anul trecut
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Produse</CardTitle>
                                <Package className="h-4 w-4 text-muted-foreground"></Package>
                            </CardHeader>
                            <CardContent>
                                <div className="md:text-2xl text-xl font-bold">11</div>
                                <p className="text-xs text-muted-foreground">Produse în vânzare</p>
                            </CardContent>
                        </Card>
                        <Card className="col-span-2">
                            <CardHeader>
                                <CardTitle>Recent Sales</CardTitle>
                                <CardDescription>You made 265 sales this month.</CardDescription>
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
                                    categories={['Nr. de comenzi', 'Venit din comenzi']}
                                    yAxisWidth={50}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
