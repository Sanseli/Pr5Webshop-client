import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product, Category } from '../shared/models';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-order',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private categoryService: CategoryService) { 
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      console.log(this.products);
    });
  }

  clickBrood() {
    
  }
}
