export interface Employee {
    id?: number;
    name: string;
    position: string;
    imgUrl?: string;
}

export interface Product {
    id?: number;
    name: string;
    category_id: number;
    img_url?: string;
    price: number;
}

export interface Category {
    id?: number;
    name: string;
}

export interface Order {
    id?: number;
    orderdate: Date;
    producten: Array<Product>;
}

export interface Customer {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    telnr: string;
    address: string;
}