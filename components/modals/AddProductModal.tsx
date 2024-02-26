import AddProductForm from '../forms/AddProductForm';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import { Plus } from 'lucide-react';

export function AddProductModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    className="py-6 flex items-center bg-green-500 hover:bg-green-600 active:scale-[.98]">
                    Adaugă produs
                    <Plus className="ml-2 h-4 w-4"></Plus>
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[595px]">
                <DialogHeader>
                    <DialogTitle>Adaugă un produs nou</DialogTitle>
                    <DialogDescription>
                        Completează toate câmpurile pentru a crea un produs nou
                    </DialogDescription>
                </DialogHeader>

                <AddProductForm />
            </DialogContent>
        </Dialog>
    );
}
