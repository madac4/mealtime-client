import React, { useEffect } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';
import { useDeleteProductsMutation } from '@/store/products/productsApi';
import { Loader2, Trash2 } from 'lucide-react';
import { IProduct } from '@/@types/custom';
import { useToast } from '@/hooks/useToast';

interface IProductRemoveProps {
    product: IProduct;
    table: any;
    row: any;
}

export default function TableProductRemove({ product, table, row }: IProductRemoveProps) {
    const [deleteProduct, { isLoading, isSuccess, error }] = useDeleteProductsMutation();
    const meta = table.options.meta;

    useEffect(() => {
        useToast({ isSuccess, message: 'Produsul a fost șters cu succes.', error });
    }, [isSuccess]);

    useEffect(() => {
        useToast({ error });
    }, [error]);

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button size="icon" variant="outline" className="outline-none">
                    {isLoading ? (
                        <Loader2 className="h-5 w-5 text-red-600 animate-spin"> </Loader2>
                    ) : (
                        <Trash2 className="h-5 w-5 text-red-600"> </Trash2>
                    )}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Sigur dorești să ștergi {product.name}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Această acțiune nu poate fi anulată. Aceasta va șterge permanent produsul.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Anulează</AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-red-600"
                        onClick={async () => {
                            await deleteProduct(product._id);
                            meta?.removeRow(row.index);
                        }}>
                        Șterge
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
