import { OnDestroy } from '@angular/core';

export interface Employee {
    id?: number;
    name: string;
    position: string;
    imgUrl?: string;
}

export interface Product {
    id?: number;
    name: string;
    categoryID: number;
    imgUrl?: string;
    price: number;
    category?: Category;
}

export interface Category {
    id?: number;
    name: string;
    imgUrl: string;
}

export interface Order {
    id?: number;
    orderdate: string;
    customerID: number;
    productID: number;
    amount: number;
    total: number;
}

export interface Customer {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    telnr: string;
    address: string;
    password: string;
}

export interface Cart {
    products: Array<Product>;
    total?: number;
}

export interface User {
    id?: number;
    username: string;
    password: string;
    token?: string;
}