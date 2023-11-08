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
    username: string;
    password: string;
}

export interface ProductTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}
