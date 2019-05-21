import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product, Category } from '../shared/models';
import { CategoryService } from '../shared/category.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-order',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[];
  categories: Category[];

  constructor(private productService: ProductService, private categoryService: CategoryService,
  private router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      console.log(this.products);
    });
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      console.log(res);
    });
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

  clickBrood() {
    
  }

  toCart() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(CartDialogComponent, dialogConfig)
  }
}
