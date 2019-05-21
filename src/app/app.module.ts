
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
  ShopComponent, ShopCategoryComponent, CartDialogComponent } from './index';

import { EmployeeService } from './shared/employee.service';
import { ProductService } from './shared/product.service';
import { CategoryService } from './shared/category.service';
import { CartService } from './shared/cart.service';
import { CustomerService } from './shared/customer.service';

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
      CustomerService
    ],
  declarations:
    [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        ManagementComponent,
        ShopComponent,
        ShopCategoryComponent,
        CartDialogComponent
    ],
  bootstrap:
    [
        AppComponent
    ],
  entryComponents:
    [
      CartDialogComponent
    ]
})
export class AppModule { }