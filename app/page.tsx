'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push('/dashboard');
    };
    return (
        <div className="flex h-screen w-screen items-center flex-col justify-center container">
            <img src="/images/logo.png" alt="" className="w-32 mb-10" />
            <form
                action="#"
                className="max-w-md w-full gap-4 flex flex-col"
                onSubmit={handleSubmit}>
                <Input type="text" placeholder="Username (ID)" />
                <Input type="password" placeholder="Password" />

                <Button type="submit" size="lg" className="mt-3">
                    Intră în cont
                </Button>
            </form>
        </div>
    );
}
