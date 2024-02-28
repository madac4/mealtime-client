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
import { IUser } from '@/@types/custom';
import { useDeleteUserMutation } from '@/store/user/usersApi';
import { useToast } from '@/hooks/useToast';

export default function TableUserRemove({
    user,
    table,
    row,
}: {
    user: IUser;
    table: any;
    row: any;
}) {
    const [deleteUser, { isLoading, isSuccess, error }] = useDeleteUserMutation();
    const meta = table.options.meta;

    useEffect(() => {
        useToast({ isSuccess, message: 'Punctul de livrare a fost sters cu succes!', error });
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
                    <AlertDialogTitle>Sigur dorești să ștergi punctul de livrare?</AlertDialogTitle>
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
                            await deleteUser(user._id);
                            meta?.removeRow(row.index);
                        }}>
                        Șterge
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
