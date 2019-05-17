import { Routes } from '@angular/router';
import { HomeComponent, ManagementComponent, ShopComponent, ShopCategoryComponent } from './index';

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
    },
    {
        path: 'shop/:category',
        component: ShopCategoryComponent
    }
]