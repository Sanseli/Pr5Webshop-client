import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Cart } from './models';

@Injectable()
export class CartService {
    items: Product[] = [];

    constructor() {}

    addItem(product: Product) {
        this.items.push(product);
        console.log(this.items)
    }
}