interface IMenuItem {
    url: string;
    label: string;
}

export const userMenu: IMenuItem[] = [
    {
        url: '/dashboard',
        label: 'Dashboard',
    },
    {
        url: '/dashboard/shop',
        label: 'Magazin',
    },
];

export const adminMenu: IMenuItem[] = [
    {
        url: '/dashboard/admin',
        label: 'Dashboard',
    },
    {
        url: '/dashboard/admin/companies',
        label: 'Companii',
    },
    {
        url: '/dashboard/admin/clients',
        label: 'Clienți',
    },
    {
        url: '/dashboard/admin/orders',
        label: 'Comenzi',
    },
    {
        url: '/dashboard/admin/products',
        label: 'Produse',
    },
];

export const chartdata = [
    {
        name: 'Rompetrrol',
        'Suma comenzilor (MDL)': 126261,
    },
    {
        name: 'Vento',
        'Suma comenzilor (MDL)': 29632,
    },
    {
        name: 'Petrom',
        'Suma comenzilor (MDL)': 78251,
    },
    {
        name: 'Bemol',
        'Suma comenzilor (MDL)': 51521,
    },
    {
        name: 'Avante',
        'Suma comenzilor (MDL)': 15237,
    },
    {
        name: 'Lukoil',
        'Suma comenzilor (MDL)': 20236,
    },
    {
        name: 'Now',
        'Suma comenzilor (MDL)': 12032,
    },
];

export const ordersStatistics = [
    {
        date: 'Ian 23',
        'Nr. de comenzi': 12,
        'Venit din comenzi': 12592,
    },
    { date: 'Feb 23', 'Nr. de comenzi': 18, 'Venit din comenzi': 28920 },
    { date: 'Mar 23', 'Nr. de comenzi': 22, 'Venit din comenzi': 14830 },
    { date: 'Apr 23', 'Nr. de comenzi': 17, 'Venit din comenzi': 16200 },
    { date: 'Mai 23', 'Nr. de comenzi': 20, 'Venit din comenzi': 27340 },
    { date: 'Iun 23', 'Nr. de comenzi': 15, 'Venit din comenzi': 13050 },
    { date: 'Iul 23', 'Nr. de comenzi': 48, 'Venit din comenzi': 52760 },
    { date: 'Aug 23', 'Nr. de comenzi': 19, 'Venit din comenzi': 15080 },
    { date: 'Sep 23', 'Nr. de comenzi': 21, 'Venit din comenzi': 19590 },
    { date: 'Oct 23', 'Nr. de comenzi': 11, 'Venit din comenzi': 12550 },
    { date: 'Noi 23', 'Nr. de comenzi': 62, 'Venit din comenzi': 65927 },
    { date: 'Dec 23', 'Nr. de comenzi': null, 'Venit din comenzi': null },
];
