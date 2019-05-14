import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Category } from './models';

@Injectable()
export class CategoryService {
    constructor(private http: HttpClient) {
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>('api/category');
    }

    getCategory(id: number): Observable<Category> {
        return this.http.get<Category>(`api/category/${id}`);
    }

    postCategory(category: Category): Observable<Category> {
        return this.http.post<Category>('api/category', category);
    }
}