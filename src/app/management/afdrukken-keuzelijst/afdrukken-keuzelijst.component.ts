import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { Order, OrderService, Customer, CustomerService, Product, ProductService } from 'src/app/shared';
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

@Component({
    templateUrl: './afdrukken-keuzelijst.component.html',
    styleUrls: ['./afdrukken-keuzelijst.component.css']
})
export class AfdrukkenKeuzelijstComponent {
    orders: Order[];
    customers: Customer[];
    products: Product[];
    columns = [{title: 'Datum', dataKey: 'date' }, { title: 'Product', dataKey: 'product'}, {Title: 'Klant', dataKey: 'customer'},
    {title: 'Aantal', dataKey: 'amount'}, {title: 'Totale prijs', dataKey: 'price'}];
    row;

    constructor(private buttomSheetRef: MatBottomSheetRef<AfdrukkenKeuzelijstComponent>, private orderService: OrderService,
                private customerService: CustomerService, private productService: ProductService) {
        this.orderService.getOrders().subscribe( o =>  {this.orders = o});
        this.customerService.getCustomers().subscribe(c => {this.customers = c});
        this.productService.getProducts().subscribe(p => {this.products = p});
    }

    openLink(event: MouseEvent): void {
        this.buttomSheetRef.dismiss();
        event.preventDefault();
    }

    bekijkBestellingen() {

    }

    printAlle() {
        const rows = [];

        for (let index = 0; index < this.orders.length; index++) {
            const o: Order = this.orders[index];
            const product = this.products.find(p => (
                p.id === o.productID
            ));
            const customer = this.customers.find(x => (
                x.id === o.customerID
            ));

            const customername = customer.lastname + ' ' + customer.firstname;

            let row = {'date': o.orderdate, 'product': product.name, 'customer': customername, 'amount': o.amount, 'price': '€ ' + o.total};

            rows.push(row);
        }
        console.log(rows)
        const doc = new jsPDF('p', 'pt');
        doc.setFontSize(22);
        doc.text(20, 20, 'Bestellingen');
        doc.autoTable(this.columns, rows);
        setTimeout(() => {
            doc.save('table.pdf');
        }, 500);
    }

    printWeek() {

    }

    printMaand() {
        
    }
}
