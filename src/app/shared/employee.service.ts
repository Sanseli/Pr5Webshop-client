import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Employee } from './models';

@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) {
    }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>('api/employee');
    }

    getEmployee(id: number): Observable<Employee> {
        return this.http.get<Employee>(`api/employee/${id}`);
    }

    postEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>('api/employee', employee);
    }

    deleteEmployee(id: number): Observable<{}> {
        const url = `api/employee/${id}`;
        return this.http.delete(url);
    }

    updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`api/employee/${employee.id}`, employee);
    }
}