import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product, Category } from 'src/app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/shared/category.service';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService, private route: ActivatedRoute, private categoryService: CategoryService,
    private cartService: CartService) { }

  ngOnInit() {
    let categories: Category[];
    this.categoryService.getCategories().subscribe(res => {
      categories = res;
      this.route.paramMap.subscribe(params => {
        const categoryname = params.get('category'); 
        const thiscat = categories.filter(category => category.name.toLowerCase() === categoryname)[0];
        console.log(thiscat)
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
    this.cartService.addItem(product)
  }

}
