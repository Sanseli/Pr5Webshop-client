import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CartService } from '../shared/cart.service';
import { Customer, Product, Order } from '../shared/models';
import { CustomerService } from '../shared/customer.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { formatDate } from '@angular/common';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {
  product: Product;
  userexists = false;

  constructor(public dialogRef: MatDialogRef<CartDialogComponent>, private cartService: CartService,
              private customerService: CustomerService, @Inject(MAT_DIALOG_DATA) public data: any,
              private orderService: OrderService) {
    this.product = data.product;
  }

  ngOnInit() {
  }

  clickLogin() {
    this.userexists = true;
  }

  clickNew() {
    this.userexists = false;
  }

  onSubmitNew(formValues) {
    let customers: Customer[] = null;

    const firstname = formValues.firstname; const lastname = formValues.lastname;
    const email = formValues.email; const telnr = formValues.telnr; const address = formValues.address;
    const password = formValues.pass1; const passwordVerify = formValues.pass2;

    if (password === passwordVerify) {
      const NewCustomer = {firstname, lastname, email, telnr, address, password }  as Customer;
      this.customerService.postCustomer(NewCustomer).subscribe(
        res => {
          this.customerService.getCustomers().subscribe(c => {
          customers = c;
          const customerID = customers[customers.length -1].id;
          const orderdate = formatDate(formValues.orderdate, 'dd-MM-yyyy', 'en');
          this.placeOrder(customerID, orderdate, formValues.amount)
        });
      });
    }
  }

  onSubmitLogin(formValues) {
    let customers: Customer[];
    this.customerService.getCustomers().subscribe(res => {
      customers = res;
      console.log(customers);

      const customer = customers.filter(c => c.email.toLowerCase() === formValues.email.toLowerCase());

      if (customer[0].password === formValues.pass1) {
        console.log('success');

        const orderdate = formatDate(formValues.orderdate, 'dd-MM-yyyy', 'en');
        this.placeOrder(customer[0].id, orderdate, formValues.amount)
      }
    });
  }

  placeOrder(customerID, orderdate, amount) {
    const productID = this.product.id;
    const total = Math.round((this.product.price * amount) * 100) / 100;
    const order = {orderdate, customerID, productID, amount, total} as Order;

    console.log(order)
    this.orderService.postOrder(order).subscribe(res => {console.log(res)});
  }

}
