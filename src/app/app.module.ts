
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';

import { EmployeeService } from './shared/employee.service';

@NgModule({
  imports:
    [
        BrowserModule,
        AppMaterialModule,
        RouterModule.forRoot(appRoutes),
        NgbModule,
        FormsModule,
        HttpClientModule
    ],
  providers:
    [
      HomeComponent,
      EmployeeService
    ],
  declarations:
    [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        ManagementComponent
    ],
  bootstrap:
    [
        AppComponent
    ]
})
export class AppModule { }