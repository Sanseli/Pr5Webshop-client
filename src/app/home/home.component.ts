import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../shared/models';
import { EmployeeService } from '../shared/employee.service';
import { elementStylingMap } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('about') about: ElementRef;
  employees: Employee[];



  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      res => { this.employees = res;
               this.employees.forEach(element => {
          if (element.imgUrl === null) {
            element.imgUrl = 'employee_empty.png';
          }
        });
      });
      
  }

  scroll(el: HTMLElement) {
    console.log(el);
    el.scrollIntoView();
  }

  getViewChild(el) {
    if (el === 'about') {
      return this.about;
    }
  }
}
