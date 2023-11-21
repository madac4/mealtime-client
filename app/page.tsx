'use client';
import { useLoginMutation } from '@/store/auth/authApi';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorMessage from '@/components/ErrorMessage';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ILogin } from '@/@types/custom';
import * as validation from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

export default function Login() {
    const [login, { isLoading, isSuccess, error }] = useLoginMutation();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { user, token } = useSelector((state: any) => state.auth);
    const router = useRouter();
    const formSchema = validation
        .object({
            login: validation
                .string()
                .min(5, { message: 'Login-ul trebuie sa fie de minim 5 caractere' })
                .max(30, { message: 'Login-ul nu poate avea mai mult de 30 de caractere' }),
            password: validation
                .string()
                .min(6, { message: 'Parola trebuie sa fie de minim 6 caractere' }),
        })
        .required();

    const form = useForm<validation.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            login: '',
            password: '',
        } as ILogin,
    });

    async function onSubmit(values: validation.infer<typeof formSchema>) {
        await login({
            login: values.login,
            password: values.password,
        });
    }

    useEffect(() => {
        if (isSuccess) {
            user.isAdmin ? router.push('/dashboard/admin') : router.push('/dashboard');
        }

        if (token) {
            user.isAdmin ? router.push('/dashboard/admin') : router.push('/dashboard');
        }
    }, [isSuccess, user]);

    return (
        <div className="flex h-screen w-screen items-center flex-col justify-center container">
            <img src="/images/logo.png" alt="" className="w-32 mb-10" />

            {error && <ErrorMessage error={error} />}

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="max-w-md w-full gap-4 flex flex-col">
                    <FormField
                        control={form.control}
                        name="login"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Login</FormLabel>
                                <FormControl>
                                    <Input
                                        id="login"
                                        autoComplete="username"
                                        placeholder="sacxx-xxxxxxxxx"
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
                                <div className="relative">
                                    <FormControl>
                                        <Input
                                            placeholder="**************"
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            autoComplete="current-password"
                                            {...field}
                                        />
                                    </FormControl>
                                    {showPassword ? (
                                        <EyeOff
                                            onClick={() => setShowPassword(false)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"></EyeOff>
                                    ) : (
                                        <Eye
                                            onClick={() => setShowPassword(true)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"></Eye>
                                    )}
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" size="lg" className="mt-3" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-1 h-5 w-5 animate-spin"></Loader2>}
                        Intră în cont
                    </Button>
                </form>
            </Form>
        </div>
    );
}
