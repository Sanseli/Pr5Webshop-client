import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CartService } from '../shared/cart.service';
import { Customer } from '../shared/models';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {
  userexists = false;
  cart;
  constructor(public dialogRef: MatDialogRef<CartDialogComponent>, private cartService: CartService, 
    private customerService: CustomerService) { }

  ngOnInit() {
    this.cart = this.cartService.items.values;
    console.log(this.cartService.items)
  }

  clickLogin() {
    this.userexists = true;
  }

  clickNew() {
    this.userexists = false;
  }

  onSubmitNew(formValues) {
    const firstname = formValues.firstname; const lastname = formValues.lastname; 
    const email = formValues.email; const telnr = formValues.telnr; const address = formValues.address; 
    const password = formValues.pass1; const passwordVerify = formValues.pass2;

    if (password === passwordVerify) {
      const NewCustomer = {firstname, lastname, email, telnr, address, password }  as Customer;
      console.log(NewCustomer);
      this.customerService.postCustomer(NewCustomer).subscribe(res => { console.log(res)})
    }
  }

  onSubmitLogin(formValues) {
    let customers: Customer[];
    this.customerService.getCustomers().subscribe(res => {
      customers = res
      console.log(customers)

      let customer = customers.filter(c => c.email.toLowerCase() === formValues.email.toLowerCase());

      if (customer[0].password === formValues.pass1) {
        console.log('success')
      }
    });
  }
 
}
