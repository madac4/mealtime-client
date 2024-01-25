import History from '@/components/blocks/History';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import OrdersCount from '@/components/blocks/OrdersCount';

export default function Dashboard() {
    return (
        <>
            <div className="dashboard py-5 mb-5">
                <div className="container">
                    <div className="grid gap-4 md:grid-cols-2">
                        {/* <OrdersSum className="col-span-1" /> */}
                        <OrdersCount className="col-span-1 h-fit" />
                        <Card className="col-span-1">
                            <CardHeader>
                                <CardTitle>Achiziții recente</CardTitle>
                                {/* <CardDescription>You made 265 sales this month.</CardDescription> */}
                            </CardHeader>
                            <CardContent>
                                <History />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
