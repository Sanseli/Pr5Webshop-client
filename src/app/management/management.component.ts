import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/models';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.newEmployee(form.name, form.position, form.img_url);
  }

  newEmployee(name: string, position: string, imgUrl: string) {
    const employee = {name, position, imgUrl} as Employee;
    this.employeeService.postEmployee(employee).subscribe(res => {console.log(res)});
  }

}
