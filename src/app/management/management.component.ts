import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee, Product, Category } from '../shared/models';
import { ProductService } from '../shared/product.service';
import { CategoryService } from '../shared/category.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { AfdrukkenKeuzelijstComponent } from './afdrukken-keuzelijst/afdrukken-keuzelijst.component';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  categories: Category[];

  constructor(private employeeService: EmployeeService, private productService: ProductService,
              private categoryService: CategoryService, private http: HttpClient, private router: Router, 
              private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      console.log(res);
    })
  }

  toHome(tag?: any) {
    console.log(tag)
    let route;
    if (tag !== undefined) {
      route = '/home/' + tag;
    } else {
      route = '/home';
    }
    this.router.navigate([route]);

  }

  toShop() {
    this.router.navigate(['/shop']);
  }

  bestellingenAfdrukken(): void {
    this.bottomSheet.open(AfdrukkenKeuzelijstComponent);
  }

  toProducten() {
    this.router.navigate(['/management/producten']);
  }

  toWerknemers() {
    this.router.navigate(['/management/werknemers']);
  }


}
