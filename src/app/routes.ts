import { Routes } from '@angular/router';
import { HomeComponent, ManagementComponent, ShopComponent, ShopCategoryComponent, ManagementBeheerComponent } from './index';

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
        path: 'home/:tag',
        component: HomeComponent

    },
    {
        path: 'management',
        component: ManagementComponent
    },
    {
        path: 'management/:dbtable',
        component: ManagementBeheerComponent
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