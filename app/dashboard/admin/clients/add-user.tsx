import { ICompany, IUserBody } from '@/@types/custom';
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { axiosInstance } from '@/utils/axiosInstance';
import { Loader2, Store } from 'lucide-react';
import { useEffect, useState } from 'react';

export function AddUserModal() {
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [userData, setUserData] = useState<IUserBody>({
        phone: '',
        password: '',
        address: '',
        city: '',
        UUID: '',
        companyId: '',
    });
    const addNewUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const { data } = await axiosInstance.post('/register', userData);
            if (data.success) {
                setSuccess(data.success);
            }
            setLoading(false);
        } catch (error: any) {
            setError(error.response.data.message);
            setSuccess(false);
            setLoading(false);
        }

        setTimeout(() => setError(''), 3000);
        setTimeout(() => setSuccess(false), 1500);
    };

    const handleUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    console.log(userData);

    const handleCompanies = async () => {
        await axiosInstance.get('/get-companies-select').then((res) => {
            if (res.data.success) {
                setCompanies(res.data.companies);
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
    };

    useEffect(() => {
        handleCompanies();
    }, []);
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
                    <DialogTitle>Adaugă un punct nou de vânzare</DialogTitle>
                </DialogHeader>
                {success && (
                    <div className="p-4 bg-green-200 rounded-sm flex items-center gap-2">
                        Punctul de vânzare a fost adăugat cu success{' '}
                        <span className="text-lg">✅</span>
                    </div>
                )}
                {error && (
                    <div className="p-4 bg-red-200 rounded-sm flex items-center gap-2">
                        {error} <span className="text-lg">❌</span>
                    </div>
                )}
                <form className="flex flex-col gap-5 py-4" onSubmit={addNewUser}>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="phone">Nr. de telefon</Label>
                        <Input
                            id="phone"
                            value={userData.phone}
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            onChange={handleUserData}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="address">Oraşul</Label>
                        <Input
                            id="city"
                            value={userData.city}
                            name="city"
                            onChange={handleUserData}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="address">Adresa</Label>
                        <Input
                            id="address"
                            value={userData.address}
                            name="address"
                            onChange={handleUserData}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="UUID">UUID</Label>
                        <Input
                            id="UUID"
                            value={userData.UUID}
                            type="UUID"
                            name="UUID"
                            onChange={handleUserData}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password">Parola</Label>
                        <Input
                            id="password"
                            value={userData.password}
                            type="password"
                            name="password"
                            onChange={handleUserData}
                        />
                    </div>
                    {companies && companies.length > 0 && (
                        <div className="flex flex-col gap-2">
                            <Label>Compania</Label>
                            <Select
                                onValueChange={(value) => {
                                    setUserData({ ...userData, companyId: value });
                                }}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selectează compania" />
                                </SelectTrigger>
                                <SelectContent>
                                    {companies.map((company) => (
                                        <SelectItem key={company._id} value={company._id}>
                                            {company.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    )}
                    <DialogFooter>
                        <Button
                            type="submit"
                            disabled={loading}
                            className="bg-green-500 hover:bg-green-600">
                            {loading && <Loader2 className="mr-1 h-4 w-4 animate-spin"></Loader2>}
                            Adaugă punctul de vânzare
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
