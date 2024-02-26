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
import { Loader2, Trash2 } from 'lucide-react';
import { IUser } from '@/@types/custom';
import { useDeleteUserMutation } from '@/store/user/usersApi';

export default function TableUserRemove({ user }: { user: IUser }) {
    const [deleteUser, { isLoading, isSuccess, error }] = useDeleteUserMutation();

    const removeUser = async (id: string) => {
        try {
            await deleteUser(id);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            alert('Punctul de livrare a fost sters cu succes!');
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
                        onClick={() => {
                            removeUser(user._id);
                        }}>
                        Șterge
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
