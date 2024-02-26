import { ICompanyBody } from '@/@types/custom';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Building2 } from 'lucide-react';
import { useState } from 'react';
import AddCompanyForm from '../forms/AddCompanyForm';

export function AddCompanyModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    className="py-6 flex items-center bg-blue-500 hover:bg-blue-600 active:scale-[.98]">
                    Adaugă companie
                    <Building2 className="ml-2 h-4 w-4"></Building2>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[595px]">
                <DialogHeader>
                    <DialogTitle>Adaugă o companie nouă</DialogTitle>
                    <DialogDescription>
                        Completează toate câmpurile pentru a adăuga o companie nouă
                    </DialogDescription>
                </DialogHeader>

                <AddCompanyForm />
            </DialogContent>
        </Dialog>
    );
}
