import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import CompanySelector from './CompanySelector';
import { Loader2 } from 'lucide-react';
import { useRegisterMutation } from '@/store/auth/authApi';
import { useToast } from '@/hooks/useToast';
import { initialRegisterSchema, registerFormSchema } from '@/constants/forms.config';
import { generateLogin } from '@/lib/utils';

export default function AddUserForm({ table }: { table: any }) {
    const [registerUser, { isLoading, isSuccess, error }] = useRegisterMutation();
    const meta = table.options.meta;

    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: initialRegisterSchema,
    });

    const handleRegisterUser = async (values: z.infer<typeof registerFormSchema>) => {
        await registerUser({
            company: values.company,
            address: values.address,
            person: values.person,
            password: values.password,
            UUID: values.UUID,
            city: values.city,
            phone: values.phone,
        });

        const login = generateLogin(values.UUID, values.city);

        meta?.addRow({
            company: values.companyName,
            address: values.address,
            person: values.person,
            password: values.password,
            UUID: values.UUID,
            city: values.city,
            phone: values.phone,
            login,
        });
    };

    useEffect(() => {
        useToast({ isSuccess, message: 'Punctul de vânzare a fost adăugat cu succes' });
        form.reset();
    }, [isSuccess]);

    useEffect(() => {
        useToast({ error });
    }, [error]);

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleRegisterUser)}
                    className="gap-3 my-3 grid grid-cols-2">
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Adresa punctului de livrare</FormLabel>
                                <FormControl>
                                    <Input
                                        id="address"
                                        type="text"
                                        placeholder="str.Mihai Viteazul 1/1"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Orașul</FormLabel>
                                <FormControl>
                                    <Input
                                        id="city"
                                        type="text"
                                        placeholder="Chișinău"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="person"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Persoana de contact</FormLabel>
                                <FormControl>
                                    <Input
                                        id="person"
                                        type="text"
                                        placeholder="Ion Popescu"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Telefon</FormLabel>
                                <FormControl>
                                    <Input
                                        id="phone"
                                        type="text"
                                        inputMode="tel"
                                        placeholder="+373********"
                                        {...field}
                                    />
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
                                        placeholder="ID unic din 1C (PECO 8A)"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Parola</FormLabel>
                                <FormControl>
                                    <Input
                                        id="password"
                                        autoComplete="off"
                                        type="password"
                                        placeholder="Parola"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <CompanySelector form={form} />
                    <Button type="submit" className="mt-2" disabled={isLoading}>
                        {isLoading ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            'Adaugă punct de vânzare'
                        )}
                    </Button>
                </form>
            </Form>
        </>
    );
}
