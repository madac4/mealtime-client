import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(value: number): string {
    return new Intl.NumberFormat('ro-RO', { style: 'decimal', minimumFractionDigits: 2 }).format(
        value,
    );
}

export function formatDateTime(stringDate: string): string {
    const date = new Date(stringDate);

    const pad = (num: number) => (num < 10 ? `0${num}` : num);

    // Extracting day, month, year, hours, and minutes
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1); // Months are 0-indexed
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    // Formatting the date
    return `${day}.${month}.${year} | ${hours}:${minutes}`;
}
