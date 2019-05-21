import { Routes } from '@angular/router';
import { HomeComponent, ManagementComponent, ShopComponent, ShopCategoryComponent } from './index';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';

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
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'shop/:category',
        component: ShopCategoryComponent
    }
]