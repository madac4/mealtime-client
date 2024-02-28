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
import { Loader2, Trash2 } from 'lucide-react';
import { ICompany } from '@/@types/custom';
import { useToast } from '@/hooks/useToast';
import { useDeleteCompanyMutation } from '@/store/company/companyApi';

export default function TableCompanyRemove({
    company,
    table,
    row,
}: {
    company: ICompany;
    table: any;
    row: any;
}) {
    const [deleteCompany, { isLoading, isSuccess, error }] = useDeleteCompanyMutation();
    const meta = table.options.meta;

    useEffect(() => {
        useToast({ isSuccess, message: 'Compania a fost ștearsă cu succes!', error });
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
                    <AlertDialogTitle>
                        Sigur dorești să ștergi compania {company.name}?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Această acțiune nu poate fi anulată. Aceasta va șterge permanent punctul de
                        livrare.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Anulează</AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-red-600"
                        onClick={async () => {
                            await deleteCompany(company.id);
                            meta?.removeRow(row.index);
                        }}>
                        Șterge
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
