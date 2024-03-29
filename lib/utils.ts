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

    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${day}.${month}.${year} | ${hours}:${minutes}`;
}

export const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

export const formattedDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};

export const formattedTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
    });
};

export const formatPhone = (phone: string) => {
    return `${phone.slice(0, 4)} ${phone.slice(4, 6)} ${phone.slice(6, 9)} ${phone.slice(9)}`;
};

export function generateLogin(code: string, city: string) {
    let formattedCity = city.replace(/[\sășțȘȚĂ]/g, function (match: string) {
        switch (match) {
            case 'ș':
                return 's';
            case 'ț':
                return 't';
            case 'Ș':
                return 'S';
            case 'Ț':
                return 'T';
            case 'ă':
                return 'a';
            case 'Ă':
                return 'A';
            default:
                return '';
        }
    });

    return (code.replace(/\s/g, '') + '-' + formattedCity).toLowerCase();
}
