export interface Employee {
    id?: number;
    name: string;
    function: string;
    img_url?: string;
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
}

export interface Customer {

}