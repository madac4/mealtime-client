import React from 'react';
import { DataTable } from './data-table';
import { columns } from './columns';

export default function Orders() {
    const orders = [
        {
            id: 'order-001',
            companyName: 'Compania Alfa',
            companyAddress: 'Strada Libertatii, Nr. 10, Bucuresti, Romania',
            amount: 1500,
            phone: '+40700123456',
            date: '2023-11-01',
        },
        {
            id: 'order-002',
            companyName: 'Beta Services',
            companyAddress: 'Bd. Revolutiei, Nr. 22, Cluj-Napoca, Romania',
            amount: 2700,
            phone: '+40700234567',
            date: '2023-11-02',
        },
        {
            id: 'order-003',
            companyName: 'Gamma Industrial',
            companyAddress: 'Strada Industriilor, Nr. 5, Timisoara, Romania',
            amount: 3250,
            phone: '+40700345678',
            date: '2023-11-03',
        },
        {
            id: 'order-004',
            companyName: 'Delta Electronics',
            companyAddress: 'Strada Pacii, Nr. 8, Iasi, Romania',
            amount: 2100,
            phone: '+40700456789',
            date: '2023-11-04',
        },
        {
            id: 'order-005',
            companyName: 'Epsilon Constructions',
            companyAddress: 'Aleea Constructorilor, Nr. 12, Constanta, Romania',
            amount: 5000,
            phone: '+40700567890',
            date: '2023-11-05',
        },
        {
            id: 'order-006',
            companyName: 'Zeta Solutions',
            companyAddress: 'Strada Mare, Nr. 30, Brasov, Romania',
            amount: 1100,
            phone: '+40700678901',
            date: '2023-11-06',
        },
        {
            id: 'order-007',
            companyName: 'Eta Ltd',
            companyAddress: 'Bd. Unirii, Nr. 47, Craiova, Romania',
            amount: 3000,
            phone: '+40700789012',
            date: '2023-11-07',
        },
        {
            id: 'order-008',
            companyName: 'Theta Electronics',
            companyAddress: 'Strada Soarelui, Nr. 15, Sibiu, Romania',
            amount: 2250,
            phone: '+40700890123',
            date: '2023-11-08',
        },
        {
            id: 'order-009',
            companyName: 'Iota Services',
            companyAddress: 'Strada Florilor, Nr. 4, Ploiesti, Romania',
            amount: 1875,
            phone: '+40700901234',
            date: '2023-11-09',
        },
        {
            id: 'order-010',
            companyName: 'Kappa Co',
            companyAddress: 'Aleea Rozelor, Nr. 21, Oradea, Romania',
            amount: 4220,
            phone: '+40701012345',
            date: '2023-11-10',
        },
        {
            id: 'order-011',
            companyName: 'Lambda Pharmaceuticals',
            companyAddress: 'Strada Principala, Nr. 90, Targu Mures, Romania',
            amount: 3800,
            phone: '+40701123456',
            date: '2023-11-11',
        },
        {
            id: 'order-012',
            companyName: 'Mu Designs',
            companyAddress: 'Strada Secundara, Nr. 8, Bacau, Romania',
            amount: 1575,
            phone: '+40701234567',
            date: '2023-11-12',
        },
        {
            id: 'order-013',
            companyName: 'Nu Productions',
            companyAddress: 'Strada Luminii, Nr. 5, Buzau, Romania',
            amount: 2600,
            phone: '+40701345678',
            date: '2023-11-13',
        },
        {
            id: 'order-014',
            companyName: 'Xi Technologies',
            companyAddress: 'Strada Noua, Nr. 17, Braila, Romania',
            amount: 3100,
            phone: '+40701456789',
            date: '2023-11-14',
        },
        {
            id: 'order-015',
            companyName: 'Omicron Ltd',
            companyAddress: 'Strada Vechi, Nr. 66, Suceava, Romania',
            amount: 2400,
            phone: '+40701567890',
            date: '2023-11-15',
        },
        {
            id: 'order-016',
            companyName: 'Pi Retail',
            companyAddress: 'Strada Muntii, Nr. 10, Alba Iulia, Romania',
            amount: 500,
            phone: '+40701678901',
            date: '2023-11-16',
        },
        {
            id: 'order-017',
            companyName: 'Rho Software',
            companyAddress: 'Strada Castelelor, Nr. 42, Hunedoara, Romania',
            amount: 3900,
            phone: '+40701789012',
            date: '2023-11-17',
        },
        {
            id: 'order-018',
            companyName: 'Sigma Corp',
            companyAddress: 'Strada Dealului, Nr. 19, Deva, Romania',
            amount: 4300,
            phone: '+40701890123',
            date: '2023-11-18',
        },
    ];
    return (
        <>
            <div className="orders py-10 mb-10">
                <div className="container">
                    <DataTable columns={columns} data={orders} />
                </div>
            </div>
        </>
    );
}
