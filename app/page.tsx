'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ILoginBody {
    username: string;
    password: string;
}

export default function Login() {
    const [loginData, setLoginData] = useState<ILoginBody>({ username: '', password: '' });
    const router = useRouter();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push('/dashboard');
    };

    return (
        <div className="flex h-screen w-screen items-center flex-col justify-center container">
            <img src="/images/logo.png" alt="" className="w-32 mb-10" />
            <h5 className="mb-10">** Introdu orice date de logare **</h5>
            <form
                action="#"
                className="max-w-md w-full gap-4 flex flex-col"
                onSubmit={handleSubmit}>
                <fieldset>
                    <Input
                        type="text"
                        placeholder="Username (ID)"
                        autoComplete="username"
                        required
                        className={!loginData.username ? 'placeholder:text-red-400' : ''}
                        value={loginData.username}
                        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                    />
                    {!loginData.username && (
                        <small className="text-red-500">Username (ID) este obligatoriu</small>
                    )}
                </fieldset>

                <fieldset>
                    <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        required
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className={!loginData.password ? 'placeholder:text-red-400' : ''}
                    />
                    {!loginData.password && (
                        <small className="text-red-500">Parola este obligatorie</small>
                    )}
                </fieldset>

                <Button type="submit" size="lg" className="mt-3">
                    Intră în cont
                </Button>
            </form>
        </div>
    );
}
