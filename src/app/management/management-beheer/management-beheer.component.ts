import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MatTableDataSource, MatSort, MatDialogConfig, MatDialog } from '@angular/material';
import { Category } from 'src/app/shared/models';
import { CategoryService } from 'src/app/shared/category.service';
import { ManagementNewDialogComponent } from '../management-new-dialog/management-new-dialog.component';

@Component({
    templateUrl: './management-beheer.component.html',
    styleUrls: ['./management-beheer.component.css']
})
export class ManagementBeheerComponent implements OnInit {
    listData: MatTableDataSource<any>;
    displayedColumns;
    categories: Category[];
    product = false;
    employee = false;
    searchKey = '';

    @ViewChild(MatSort) sort: MatSort;

    constructor(private router: Router,  private route: ActivatedRoute, private productService: ProductService, 
                private employeeService: EmployeeService, private categoryService: CategoryService, public dialog: MatDialog) { }

    ngOnInit(): void { 
        this.loadData();
    }

    loadData() {
        this.categoryService.getCategories().subscribe(res => {
            this.route.paramMap.subscribe(params => {
                this.categories = res;
                const table = params.get('dbtable');
                console.log(table);
                if (table === 'producten') {
                    this.productService.getProducts().subscribe(res => {
                        res.forEach(product => {
                            product.category = this.categories.filter(x => x.id === product.categoryID)[0];
                        });
                        this.listData = new MatTableDataSource(res);
                        console.log(this.listData)
                        this.displayedColumns = ['name', 'categoryname', 'price', 'imgUrl', 'actions'];
                        this.product = true;
                    });
                } else if (table === 'werknemers') {
                    this.employeeService.getEmployees().subscribe(res => {
                        this.listData = new MatTableDataSource(res);
                        this.displayedColumns = ['name', 'position', 'imgUrl', 'actions'];
                        this.employee = true;
                    });
                }
            });
        });
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
          this.listData.sort = this.sort;
        }, 1000);
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

    return() {
        this.router.navigate(['/management']);
    }

    onSearchClear() {
        this.searchKey = '';
        this.applyFilter();
    }

    applyFilter() {
        this.listData.filter = this.searchKey.trim().toLowerCase();

        if (this.listData.paginator) {
          this.listData.paginator.firstPage();
        }
    }

    delete(data) {
        if (this.product === true) {
            console.log(data);
            this.productService.deleteProduct(data.id).subscribe(res => {
                console.log(res);
                this.productService.getProducts().subscribe(p => {
                    console.log(p)
                    p.forEach(product => {
                        product.category = this.categories.filter(x => x.id === product.categoryID)[0];
                    });
                    this.listData = new MatTableDataSource(p);
                });
            });

        } else if (this.employee === true) {
            console.log(data);
            this.employeeService.deleteEmployee(data.id).subscribe(res => {
                console.log(res)
                this.employeeService.getEmployees().subscribe(e => {this.listData = new MatTableDataSource(e)});
            });
        }
    }
    
    edit(data) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;

        if (this.product === true) {
            dialogConfig.data = { category: 'product', new: false, d: data };
        } else if (this.employee === true) {
            dialogConfig.data = { category: 'employee', new: false, d: data };
        }
        const dialogRef = this.dialog.open(ManagementNewDialogComponent, dialogConfig)

        dialogRef.afterClosed().subscribe(result => {
            this.loadData();
        });
    }

    openNew() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;

        if (this.product === true) {
            dialogConfig.data = { category: 'product', new: true };
        } else if (this.employee === true) {
            dialogConfig.data = { category: 'employee', new: true };
        }
        const dialogRef = this.dialog.open(ManagementNewDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
            this.loadData();
        });
    }

}
