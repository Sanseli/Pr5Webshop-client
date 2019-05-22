import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product, Category } from 'src/app/shared/models';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/category.service';
import { CartService } from 'src/app/shared/cart.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CartDialogComponent } from 'src/app/cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {
  products: Product[];
  category: Category;
  loading = true;
  constructor(private productService: ProductService, private route: ActivatedRoute, private categoryService: CategoryService,
    private cartService: CartService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    let categories: Category[];
    this.categoryService.getCategories().subscribe(res => {
      categories = res;
      this.route.paramMap.subscribe(params => {
        const categoryname = params.get('category'); 
        this.category = categories.filter(category => category.name.toLowerCase() === categoryname)[0];
        const thiscat = this.category;
        console.log(thiscat)
        this.loading = false
        setTimeout(() => {
          this.productService.getProducts().subscribe(res => {
            this.products = res.filter(function(product) {
              return product.categoryID === thiscat.id;})
            console.log(this.products)
          });
        }, 1000);
      });
    })

  } 

  addProduct(product) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.data = { product: product };
      this.dialog.open(CartDialogComponent, dialogConfig)
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

  toCart() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(CartDialogComponent, dialogConfig)
  }
}
