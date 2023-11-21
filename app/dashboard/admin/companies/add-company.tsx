import { ICompanyBody } from '@/@types/custom';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { axiosInstance } from '@/utils/axiosInstance';
import { Loader2, Building2 } from 'lucide-react';
import { useState } from 'react';

export function AddCompanyModal() {
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [userData, setUserData] = useState<ICompanyBody>({
        name: '',
        address: '',
        TVA: '',
        IDNO: '',
    });
    const addNewProduct = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const { data } = await axiosInstance.post('/create-company', userData);
            if (data.success) {
                setSuccess(data.success);
            }
            setLoading(false);
        } catch (error: any) {
            console.log(error.message);
            setSuccess(false);
            setLoading(false);
        }

        setTimeout(() => setSuccess(false), 1500);
    };

    const handleProductData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

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
                {success && (
                    <div className="p-4 bg-green-200 rounded-sm flex items-center gap-2">
                        Compania a fost adăugată cu success <span className="text-lg">✅</span>
                    </div>
                )}
                <form className="grid gap-4 py-4" onSubmit={addNewProduct}>
                    <div className="xs:grid xs:grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Denumirea
                        </Label>
                        <Input
                            id="name"
                            value={userData.name}
                            name="name"
                            className="col-span-3"
                            onChange={handleProductData}
                        />
                    </div>
                    <div className="xs:grid xs:grid-cols-4 items-center gap-4">
                        <Label htmlFor="address" className="text-right">
                            Adresa
                        </Label>
                        <Input
                            id="address"
                            value={userData.address}
                            name="address"
                            className="col-span-3"
                            onChange={handleProductData}
                        />
                    </div>
                    <div className="xs:grid xs:grid-cols-4 items-center gap-4">
                        <Label htmlFor="IDNO" className="text-right">
                            IDNO
                        </Label>
                        <Input
                            id="IDNO"
                            value={userData.IDNO}
                            name="IDNO"
                            type="text"
                            className="col-span-3"
                            onChange={handleProductData}
                        />
                    </div>
                    <div className="xs:grid xs:grid-cols-4 items-center gap-4">
                        <Label htmlFor="TVA" className="text-right">
                            TVA
                        </Label>
                        <Input
                            id="TVA"
                            value={userData.TVA}
                            name="TVA"
                            type="text"
                            className="col-span-3"
                            onChange={handleProductData}
                        />
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-500 hover:bg-blue-600">
                            {loading && <Loader2 className="mr-1 h-4 w-4 animate-spin"></Loader2>}
                            Adaugă compania
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
