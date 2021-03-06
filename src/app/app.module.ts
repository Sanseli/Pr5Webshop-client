
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { appRoutes } from './routes';

import { AppComponent, NavBarComponent, HomeComponent, ManagementComponent,
  ShopComponent, ShopCategoryComponent, CartDialogComponent, AfdrukkenKeuzelijstComponent,
  ManagementBeheerComponent, ManagementNewDialogComponent, LoginComponent
} from './index';

import { EmployeeService, ProductService, CategoryService, CartService, CustomerService, OrderService, UserService, AuthGuardService
} from './index';

@NgModule({
  imports:
    [
        BrowserModule,
        AppMaterialModule,
        RouterModule.forRoot(appRoutes),
        NgbModule,
        FormsModule,
        HttpClientModule,
        MDBBootstrapModule.forRoot()
    ],
  providers:
    [
      HomeComponent,
      EmployeeService,
      ProductService,
      CategoryService,
      CartService,
      CustomerService,
      OrderService,
      UserService,
      AuthGuardService
    ],
  declarations:
    [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        ManagementComponent,
        ShopComponent,
        ShopCategoryComponent,
        CartDialogComponent,
        AfdrukkenKeuzelijstComponent,
        ManagementBeheerComponent,
        ManagementNewDialogComponent,
        LoginComponent
    ],
  bootstrap:
    [
        AppComponent
    ],
  entryComponents:
    [
      CartDialogComponent,
      AfdrukkenKeuzelijstComponent,
      ManagementNewDialogComponent
    ]
})
export class AppModule { }