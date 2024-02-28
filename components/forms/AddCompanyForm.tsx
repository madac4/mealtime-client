import { useCreateCompanyMutation } from '@/store/company/companyApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as validation from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/useToast';

const formSchema = validation
    .object({
        name: validation
            .string()
            .min(3, { message: 'Denumirea trebuie să aibă minim 3 caractere' }),
        address: validation.string(),
        TVA: validation.string(),
        IDNO: validation.string(),
    })
    .required();

export default function AddCompanyForm({ table }: any) {
    const [createCompany, { isLoading, isSuccess, error }] = useCreateCompanyMutation();
    const meta = table.options.meta;
    const form = useForm<validation.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            address: '',
            TVA: '',
            IDNO: '',
        },
    });

    const handleAddCompany = async (values: validation.infer<typeof formSchema>) => {
        await createCompany({
            name: values.name,
            address: values.address,
            TVA: values.TVA,
            IDNO: values.IDNO,
        });

        meta?.addRow({
            name: values.name,
            address: values.address,
            TVA: values.TVA,
            IDNO: values.IDNO,
        });
    };

    useEffect(() => {
        useToast({ isSuccess, message: 'Compania a fost adăugată cu succes' });
        form.reset();
    }, [isSuccess]);

    useEffect(() => {
        useToast({ error });
    }, [error]);

    return (
        <>
            <Form {...form}>
                <form className="grid gap-4 py-4" onSubmit={form.handleSubmit(handleAddCompany)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Denumirea Companiei</FormLabel>
                                <FormControl>
                                    <Input
                                        id="denumirea"
                                        type="text"
                                        placeholder="Rompetrol SRL"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Adresa Companiei</FormLabel>
                                <FormControl>
                                    <Input
                                        id="address"
                                        type="text"
                                        placeholder="str. Mihai Eminescu 1"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="TVA"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Informație TVA</FormLabel>
                                <FormControl>
                                    <Input id="tva" type="text" placeholder="0501516" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="IDNO"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>IDNO Companiei</FormLabel>
                                <FormControl>
                                    <Input
                                        id="idno"
                                        type="text"
                                        placeholder="1002495125126"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-green-500 hover:bg-green-600">
                        {isLoading && <Loader2 className="mr-1 h-4 w-4 animate-spin"></Loader2>}
                        Adaugă compania
                    </Button>
                </form>
            </Form>
        </>
    );
}
