import History from '@/components/blocks/History';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import OrdersSum from '../../components/blocks/OrdersSum';
import OrdersCount from '@/components/blocks/OrdersCount';

export default function Dashboard() {
    return (
        <>
            {/* <h1 className="py-20 text-center">Dashboard în dezvoltare</h1> */}
            <div className="dashboard py-5 mb-5">
                <div className="container">
                    <div className="grid gap-4 md:grid-cols-2">
                        <OrdersSum className="col-span-1" />
                        <OrdersCount className="col-span-1" />
                        <Card className="col-span-2">
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
