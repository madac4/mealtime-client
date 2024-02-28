import { ColumnDef } from '@tanstack/react-table';

export interface IProduct {
    _id: string;
    name: string;
    UUID: string;
    price: number;
    packageInfo: string;
    packageSize: number;
    image: {
        public_id: string;
        url: string;
    };
}

export interface ICartProduct extends IProduct {
    quantity: number;
}

interface ICartState {
    isCartVisible: boolean;
    products: ICartProduct[];
}

export interface IProductProps {
    product: IProduct;
}

export interface IProductBody {
    name: string;
    image: string;
    UUID: string;
    price: number;
    packageInfo: string;
    packageSize: number;
}

export interface ILogin {
    login: string;
    password: string;
}

export interface TableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export interface IUser {
    _id: string;
    address: string;
    city: string;
    company: {
        name: string;
    };
    phone: string;
    date: string;
    login: string;
    companyName?: string;
    removeRow?: (id: number) => void;
}

export interface ICompany {
    id: string;
    name: string;
    address: string;
    IDNO: string;
    TVA: string;
    users: number | Array;
}

export interface IUserBody {
    phone: string;
    password: string;
    address: string;
    city: string;
    UUID: string;
    companyId: string;
}

export interface ICompanyBody {
    name: string;
    address: string;
    IDNO: string;
    TVA: string;
}

export interface ICompanyQuery {
    data: {
        companies: ICompany[];
    };
    error: any;
}

export interface IRegister {
    company: string;
    address: string;
    person: string;
    password: string;
    UUID: string;
    city: string;
    phone: string;
}

export interface ICompaniesSelect {
    data: {
        companies: ICompany[];
    };
    error: any;
    isLoading: boolean;
    isSuccess: boolean;
}
