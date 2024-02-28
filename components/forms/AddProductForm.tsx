import { toBase64 } from '@/lib/utils';
import { useCreateProductMutation } from '@/store/products/productsApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as validation from 'zod';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/useToast';
import { initialProductSchema, productFormSchema } from '@/constants/forms.config';

export default function AddProductForm({ table }: { table: any }) {
    const [createProduct, { isLoading, isSuccess, error }] = useCreateProductMutation();
    const meta = table.options.meta;

    const form = useForm<validation.infer<typeof productFormSchema>>({
        resolver: zodResolver(productFormSchema),
        defaultValues: initialProductSchema,
    });

    const handleAddProduct = async (values: validation.infer<typeof productFormSchema>) => {
        if (!values.image) {
            const error = new Error();
            return useToast({ error, message: 'Imaginea este obligatorie' });
        }

        if (values.image.size > 10000000) {
            const error = new Error();
            return useToast({ error, message: 'Imaginea este prea mare' });
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

        meta.addRow({
            name: values.name,
            image: { url: base64Image },
            UUID: values.UUID,
            price: Number(values.price),
            packageInfo: values.packageInfo,
            packageSize: Number(values.packageSize),
        });
    };

    useEffect(() => {
        useToast({ isSuccess, message: 'Produsul a fost adăugat cu succes' });
    }, [isSuccess]);

    useEffect(() => {
        useToast({ error });
    }, [error]);

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
                                <FormDescription>Mărimea maximă a fișierului: 10MB</FormDescription>

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
