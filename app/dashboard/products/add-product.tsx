import { IProductBody } from '@/@types/custom';
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
import { Loader2, Plus } from 'lucide-react';
import { useState } from 'react';

export function AddProductModal() {
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [productData, setProductData] = useState<IProductBody>({
        name: '',
        image: '',
        UUID: '',
        price: 0,
        packageInfo: 'Cutie (24 buc.)',
        packageSize: 24,
    });
    const addNewProduct = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const { data } = await axiosInstance.post('/add-product', productData);
            if (data.success) {
                setSuccess(true);
                setProductData({
                    name: '',
                    image: '',
                    UUID: '',
                    price: 0,
                    packageInfo: 'Cutie (24 buc.)',
                    packageSize: 24,
                });
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
        if (event.target.name === 'image') {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setProductData({
                        ...productData,
                        [event.target.name]: reader.result as string,
                    });
                }
            };
            reader.readAsDataURL(event.target.files![0]);
        } else {
            setProductData({
                ...productData,
                [event.target.name]: event.target.value,
            });
        }
    };

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
                {success && (
                    <div className="p-4 bg-green-200 rounded-sm flex items-center gap-2">
                        Produsul a fost adăugat cu success <span className="text-lg">✅</span>
                    </div>
                )}
                <form className="grid gap-4 py-4" onSubmit={addNewProduct}>
                    <div className="xs:grid xs:grid-cols-4 items-center gap-4">
                        <Label htmlFor="image" className="text-right">
                            Imaginea
                        </Label>
                        <Input
                            id="image"
                            type="file"
                            accept="image/*"
                            name="image"
                            className="col-span-3"
                            onChange={handleProductData}
                        />
                    </div>
                    <div className="xs:grid xs:grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Denumirea
                        </Label>
                        <Input
                            id="name"
                            value={productData.name}
                            name="name"
                            className="col-span-3"
                            onChange={handleProductData}
                        />
                    </div>
                    <div className="xs:grid xs:grid-cols-4 items-center gap-4">
                        <Label htmlFor="packageSize" className="text-right">
                            Unități în cutie
                        </Label>
                        <Input
                            id="packageSize"
                            value={productData.packageSize}
                            name="packageSize"
                            type="number"
                            onChange={handleProductData}
                            className="col-span-3"
                        />
                    </div>
                    <div className="xs:grid xs:grid-cols-4 items-center gap-4">
                        <Label htmlFor="packageInfo" className="text-right">
                            Info. despre cutie
                        </Label>
                        <Input
                            id="packageInfo"
                            name="packageInfo"
                            type="text"
                            value={productData.packageInfo}
                            onChange={handleProductData}
                            className="col-span-3"
                        />
                    </div>
                    <div className="xs:grid xs:grid-cols-4 items-center gap-4">
                        <Label htmlFor="UUID" className="text-right">
                            UUID (ID din 1C)
                        </Label>
                        <Input
                            id="UUID"
                            name="UUID"
                            type="text"
                            value={productData.UUID}
                            className="col-span-3"
                            onChange={handleProductData}
                        />
                    </div>
                    <div className="xs:grid xs:grid-cols-4 items-center gap-4">
                        <Label htmlFor="price" className="text-right">
                            Preț
                        </Label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            value={productData.price}
                            className="col-span-3"
                            onChange={handleProductData}
                        />
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            disabled={loading}
                            className="bg-green-500 hover:bg-green-600">
                            {loading && <Loader2 className="mr-1 h-4 w-4 animate-spin"></Loader2>}
                            Publică produsul
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
