import SuccessMessage from '@/components/SuccessMessage';
import AddUser from '@/components/forms/AddUser';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Store } from 'lucide-react';
import { useState } from 'react';

export function AddUserModal() {
    const [success, setSuccess] = useState<boolean>(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    className="py-6 flex items-center bg-green-500 hover:bg-green-600 active:scale-[.98]">
                    Adaugă punct de vănzare
                    <Store className="ml-2 h-4 w-4"></Store>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[595px]">
                <DialogHeader>
                    <DialogTitle className="mb-3">Adaugă un punct nou de vânzare</DialogTitle>
                    {success && (
                        <SuccessMessage>
                            Punctul de vânzare a fost adăugat cu success
                        </SuccessMessage>
                    )}
                </DialogHeader>
                <AddUser setSuccess={setSuccess} />
            </DialogContent>
        </Dialog>
    );
}
