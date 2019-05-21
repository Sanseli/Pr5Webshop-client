import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../shared/models';
import { EmployeeService } from '../shared/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('about') about: ElementRef;
  employees: Employee[];

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(res => { 
      this.employees = res;
      this.employees.forEach(element => {
      if (element.imgUrl === null) {
        element.imgUrl = 'employee_empty.png';
      }
      });
    });
    this.route.paramMap.subscribe(params => {
      const tag = params.get('tag')
      let el = document.getElementById(tag);
      console.log(tag)
      //el.scrollIntoView();
    });
  }

  toShop() {
    this.router.navigate(['/shop']);
  }

  scroll(element) {
    element.scrollIntoView()
  }

  getViewChild(el) {
    if (el === 'about') {
      return this.about;
    }
  }

  toCart() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(CartDialogComponent, dialogConfig)
  }
}
