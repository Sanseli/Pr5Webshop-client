import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'management',
        component: ManagementComponent
    }
]