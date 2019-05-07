
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:
    [
        BrowserModule,
        AppMaterialModule,
        RouterModule.forRoot(appRoutes),
        NgbModule
    ],
  providers:
    [
      HomeComponent
    ],
  declarations:
    [
        AppComponent,
        NavBarComponent,
        HomeComponent
    ],
  bootstrap:
    [
        AppComponent
    ]
})
export class AppModule { }