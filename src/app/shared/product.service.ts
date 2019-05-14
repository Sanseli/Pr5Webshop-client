import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from './models';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('api/product');
    }

    getProduct(id: number): Observable<Product> {
        return this.http.get<Product>(`api/product/${id}`);
    }

    postProduct(product: Product): Observable<Product> {
        return this.http.post<Product>('api/product', product);
    }
}