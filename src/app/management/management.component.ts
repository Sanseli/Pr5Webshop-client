import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee, Product, Category } from '../shared/models';
import { ProductService } from '../shared/product.service';
import { CategoryService } from '../shared/category.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  categories: Category[];

  constructor(private employeeService: EmployeeService, private productService: ProductService,
  private categoryService: CategoryService, private http: HttpClient) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      console.log(res);
    })
  }

  onSubmitE(form) {
    this.newEmployee(form.name, form.position, form.img_url);
  }

  onSubmitC(form) {
    this.newCategory(form.name, form.img_url);
  }

  onSubmitP(form) {
    this.newProduct(form.name, form.category.id, form.img_url, form.price);
  }

  newEmployee(name: string, position: string, imgUrl: string) {
    const employee = {name, position, imgUrl} as Employee;
    this.employeeService.postEmployee(employee).subscribe(res => {console.log(res)});
  }

  newCategory(name: string, imgUrl: string) {
    const category = {name, imgUrl} as Category;
    this.categoryService.postCategory(category).subscribe(res => {console.log(res); })
  }

  newProduct(name: string, categoryID: number, imgUrl, price: number) {
    const product = {name, categoryID, imgUrl, price} as Product;
    console.log(product);
    this.productService.postProduct(product).subscribe(res => {console.log(res)})
  }
}
