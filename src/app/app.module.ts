
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { appRoutes } from './routes';

import { AppComponent, NavBarComponent, HomeComponent, ManagementComponent,
  ShopComponent, ShopBroodComponent } from './index';

import { EmployeeService } from './shared/employee.service';
import { ProductService } from './shared/product.service';
import { CategoryService } from './shared/category.service';

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
      CategoryService
    ],
  declarations:
    [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        ManagementComponent,
        ShopComponent,
        ShopBroodComponent
    ],
  bootstrap:
    [
        AppComponent
    ]
})
export class AppModule { }