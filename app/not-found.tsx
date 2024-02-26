import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="h-screen flex justify-center items-center flex-col gap-5 text-center">
            <Image width={100} height={100} src="/images/logo.png" alt="MealTime" />
            <h2>Ne pare rău, pagină nu este disponibilă.</h2>
            <p className="text-[16px]">
                Este posibil ca linkul pe care îl accesați să fie greșit. <br /> Pagina care o
                accesați nu există sau a fost eliminată.
            </p>

            <Link
                href="/"
                className={cn(
                    buttonVariants({ size: 'lg' }),
                    'text-[16px] py-6 flex gap-2 items-center',
                )}>
                <ArrowLeft />
                Mergi la pagina principală
            </Link>
        </section>
    );
}
