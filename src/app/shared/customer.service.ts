import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Customer } from './models';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) {
    }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>('api/customer');
    }

    getCustomer(id: number): Observable<Customer> {
        return this.http.get<Customer>(`api/customer/${id}`);
    }

    postCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>('api/customer', customer);
    }

}