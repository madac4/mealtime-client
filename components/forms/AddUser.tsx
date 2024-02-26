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

const FormSchema = z.object({
    company: z.string({
        required_error: 'Selectează compania.',
    }),
    address: z.string({
        required_error: 'Adresa este obligatorie.',
    }),
    person: z.string({
        required_error: 'Persoana de contact este obligatorie.',
    }),
    password: z
        .string({
            required_error: 'Parola este obligatorie.',
        })
        .min(6, { message: 'Parola trebuie să aibă minim 6 caractere.' }),
    UUID: z.string({
        required_error: 'UUID-ul este obligatoriu.',
    }),
    city: z.string({
        required_error: 'Orașul este obligatoriu.',
    }),
    phone: z.string({
        required_error: 'Numărul de telefon este obligatoriu.',
    }),
});

export default function AddUser({ setSuccess }: { setSuccess: any }) {
    const [registerUser, { isLoading, isSuccess }] = useRegisterMutation();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            company: '',
            address: '',
            person: '',
            password: '',
            UUID: '',
            city: '',
            phone: '',
        },
    });

    const handleRegisterUser = async (values: z.infer<typeof FormSchema>) => {
        await registerUser({
            company: values.company,
            address: values.address,
            person: values.person,
            password: values.password,
            UUID: values.UUID,
            city: values.city,
            phone: values.phone,
        });

        form.reset();
    };

    useEffect(() => {
        if (isSuccess) {
            setSuccess(true);
        }

        setTimeout(() => {
            setSuccess(false);
        }, 2000);
    }, [isSuccess]);

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
