import { Routes } from '@angular/router';
import { HomeComponent, ManagementComponent, ShopComponent, ShopCategoryComponent, ManagementBeheerComponent, LoginComponent, AuthGuardService
} from './index';

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
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'management',
        component: ManagementComponent,
        canActivate: [AuthGuardService]

    },
    {
        path: 'management/:dbtable',
        component: ManagementBeheerComponent,
        canActivate: [AuthGuardService]
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