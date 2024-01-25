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
} from './ui/alert-dialog';
import { Button } from './ui/button';
import { useDeleteProductsMutation } from '@/store/products/productsApi';
import { Loader2, Trash2 } from 'lucide-react';
import { IProduct } from '@/@types/custom';

export default function TableProductRemove({ product }: { product: IProduct }) {
    const [deleteProduct, { isLoading, isSuccess, error }] = useDeleteProductsMutation();

    const removeProduct = async (id: string) => {
        try {
            await deleteProduct(id);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            alert('Produsul a fost sters cu succes!');
            window.location.reload();
        }
    }, [isSuccess]);
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
                        onClick={() => {
                            removeProduct(product._id);
                        }}>
                        Șterge
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
