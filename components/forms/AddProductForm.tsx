import { toBase64 } from '@/lib/utils';
import { useCreateProductMutation } from '@/store/products/productsApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as validation from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useEffect } from 'react';

const formSchema = validation
    .object({
        name: validation.string().min(3, { message: 'Numele trebuie să aibă minim 3 caractere' }),
        image: validation.any(),
        UUID: validation.string(),
        price: validation.string(),
        packageInfo: validation.string(),
        packageSize: validation.string(),
    })
    .required();

export default function AddProductForm() {
    const [createProduct, { isLoading, isSuccess, error }] = useCreateProductMutation();
    const form = useForm<validation.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            image: null,
            UUID: '',
            price: '',
            packageInfo: '',
            packageSize: '',
        },
    });

    const handleAddProduct = async (values: validation.infer<typeof formSchema>) => {
        if (!values.image) {
            return toast.error('Imaginea este obligatorie', {
                position: 'top-center',
                icon: <span className="text-lg">⚠️</span>,
            });
        }
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

    useEffect(() => {
        if (isSuccess) {
            toast.success('Produsul a fost adăugat cu succes', {
                icon: <span className="text-lg">✅</span>,
                position: 'top-center',
            });
        }

        if (error) {
            if ('data' in error) {
                const { data } = error as any;
                toast.error(data?.message, {
                    position: 'top-center',
                    icon: <span className="text-lg">❌</span>,
                });
            }
        }
    }, [isSuccess, error]);

    return (
        <>
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
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-green-500 hover:bg-green-600">
                        {isLoading && <Loader2 className="mr-1 h-4 w-4 animate-spin"></Loader2>}
                        Adaugă produsul
                    </Button>
                </form>
            </Form>
        </>
    );
}
