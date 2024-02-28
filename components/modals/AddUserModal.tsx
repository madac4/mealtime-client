import AddUserForm from '@/components/forms/AddUserForm';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Store } from 'lucide-react';

export function AddUserModal({ table }: { table: any }) {
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
                </DialogHeader>
                <AddUserForm table={table} />
            </DialogContent>
        </Dialog>
    );
}
