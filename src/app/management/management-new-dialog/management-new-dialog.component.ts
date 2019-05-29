import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Category, Product, Employee } from 'src/app/shared/models';
import { CategoryService } from 'src/app/shared/category.service';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/node';
import { ProductService } from 'src/app/shared/product.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
    templateUrl: './management-new-dialog.component.html',
    styleUrls: ['./management-new-dialog.component.css']
})
export class ManagementNewDialogComponent implements OnInit {
    product = false;
    employee = false;
    category = false;
    categories: Category[];
    new;
    em: Employee;
    pr: Product;

    constructor(public dialogRef: MatDialogRef<ManagementNewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
                private categoryService: CategoryService, private productService: ProductService, 
                private employeeService: EmployeeService) {
        this.new = data.new;

        if (data.category === 'product') {
            this.categoryService.getCategories().subscribe(res => {
                this.categories = res;
                this.product = true;
            });
            console.log(this.new)
            if (this.new === false) {
                this.pr = data.d as Product;
                console.log(this.pr);
            } else {
                const name = ''; const categoryID = 0; const imgUrl = ''; const price = 0;
                this.pr = {name, categoryID, imgUrl, price} as Product;
            }
        } else if (data.category === 'employee') {
            this.employee = true;
            if (this.new === false) {
                this.em = data.d as Employee;
                console.log(this.em);
            } else {
                const name = '' ; const position = '' ; const imgUrl = '' ;
                this.em = {name, position, imgUrl} as Employee;
            }
        } else if (data.category === 'category') {
            this.category = true;
        }

    }

    ngOnInit(): void { }

    onSubmit(formdata) {
        if (this.product === true) {
            console.log(formdata)
            const name: string = formdata.name;
            const categoryID: number = formdata.category as number;
            const imgUrl: string = formdata.img_url;
            const price: number = formdata.price;

            let p
            if (imgUrl !== undefined) {
                p = {name, categoryID, imgUrl, price} as Product;
            } else {
                p = {name, categoryID, price} as Product;
            }
            console.log(p);
            if (this.new === true) {
                this.productService.postProduct(p).subscribe(res => {
                    console.log(res)
                    this.dialogRef.close();
                });
                console.log('skfhkefhse')
            } else if (this.new === false) {
                console.log(this.pr)
                this.productService.updateproduct(this.pr).subscribe(res => {
                    console.log(res);
                    this.dialogRef.close();
                })
            }

        } else if (this.employee === true) {
            const name: string = formdata.name;
            const position: string = formdata.position;
            const imgUrl: string  = formdata.img_url;

            let e
            if (imgUrl !== undefined) {
                e = {name, position, imgUrl} as Employee;
            } else {
                e = {name, position} as Employee;
            }
            console.log(e);
            if (this.new === true) {
                this.employeeService.postEmployee(e).subscribe(res => console.log(res));
            } else if (this.new === false) {
                this.employeeService.updateEmployee(this.em).subscribe(res => console.log(res))
            }

        } else if (this.category === true) {
            
        }
    }
}
