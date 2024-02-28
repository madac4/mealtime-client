'use client';
import { useLoginMutation } from '@/store/auth/authApi';
import React, { useEffect, useState } from 'react';
import * as validation from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/useToast';
import { checkAdmin } from '@/hooks/userAuth';
import { initialLoginSchema, loginFormSchema } from '@/constants/forms.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
    const form = useForm<validation.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: initialLoginSchema,
    });
    const [login, { isLoading, isSuccess, error }] = useLoginMutation();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const isAdmin = checkAdmin();
    const router = useRouter();

    async function onSubmit(values: validation.infer<typeof loginFormSchema>) {
        await login({
            login: values.login,
            password: values.password,
        });
    }

    useEffect(() => {
        if (isSuccess) {
            isAdmin ? router.replace('/dashboard/admin') : router.replace('/dashboard/shop');
        }
    }, [isSuccess, isAdmin]);

    useEffect(() => {
        useToast({ error });
    }, [error]);

    return (
        <>
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
        </>
    );
}
