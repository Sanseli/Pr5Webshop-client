import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Order } from './models';

@Injectable()
export class OrderService {
    constructor(private http: HttpClient) {
    }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>('api/order');
    }

    getOrder(id: number): Observable<Order> {
        return this.http.get<Order>(`api/order/${id}`);
    }

    postOrder(order: Order): Observable<Order> {
        return this.http.post<Order>('api/order', order);
    }
}