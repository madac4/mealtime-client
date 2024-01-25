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
import { useCreateProductMutation } from '@/store/products/productsApi';
import { Loader2, Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as validation from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { toBase64 } from '@/lib/utils';
import ErrorMessage from '@/components/ErrorMessage';

export function AddProductModal() {
    const [createProduct, { isLoading, isSuccess, error }] = useCreateProductMutation();
    const formSchema = validation
        .object({
            name: validation
                .string()
                .min(3, { message: 'Numele trebuie să aibă minim 3 caractere' }),
            image: validation.instanceof(File),
            UUID: validation.string(),
            price: validation.string(),
            packageInfo: validation.string(),
            packageSize: validation.string(),
        })
        .required();

    const form = useForm<validation.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            image: new File([], ''),
            UUID: '',
            price: '',
            packageInfo: '',
            packageSize: '',
        },
    });

    const handleAddProduct = async (values: validation.infer<typeof formSchema>) => {
        const base64Image = await toBase64(values.image);
        await createProduct({
            name: values.name,
            image: base64Image,
            UUID: values.UUID,
            price: Number(values.price),
            packageInfo: values.packageInfo,
            packageSize: Number(values.packageSize),
        });
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
                {isSuccess && (
                    <div className="p-3 bg-green-200 rounded-sm flex items-center gap-2">
                        Produsul a fost adăugat cu success <span className="text-lg">✅</span>
                    </div>
                )}
                {error && <ErrorMessage error={error} />}
                <Form {...form}>
                    <form
                        encType="multipart/form-data"
                        className="grid gap-4 py-4"
                        onSubmit={form.handleSubmit(handleAddProduct)}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Denumirea Produsului</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder='Ceai "Greenfield" 100g'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="packageInfo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Info. despre cutie</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="packageInfo"
                                            type="text"
                                            placeholder="ex: Cutie 24 bucăți"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="packageSize"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Unități în cutie</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="packageSize"
                                            type="text"
                                            placeholder="24"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Preț</FormLabel>
                                    <FormControl>
                                        <Input id="price" type="text" placeholder="17" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="UUID"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>UUID</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="UUID"
                                            type="text"
                                            placeholder="ID Unic din 1C"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Imaginea</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="image"
                                            accept="image/*"
                                            className="p-2"
                                            onChange={(e) =>
                                                field.onChange(
                                                    e.target.files ? e.target.files[0] : null,
                                                )
                                            }
                                            type="file"
                                            multiple={false}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="bg-green-500 hover:bg-green-600">
                                {isLoading && (
                                    <Loader2 className="mr-1 h-4 w-4 animate-spin"></Loader2>
                                )}
                                Publică produsul
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
