import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { ShopComponent } from './shop/shop.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    }
]