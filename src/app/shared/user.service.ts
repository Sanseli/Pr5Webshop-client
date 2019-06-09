import { Injectable } from '@angular/core';
import { User } from './models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    token: any;
    authentication: string;
    
    constructor(private http: HttpClient) { }

    isAuthenticated(): boolean {
        if (this.authentication !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    login(user: User){
        return this.http.post<User>('api/User/authenticate', user);
    }
}