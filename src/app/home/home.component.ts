import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('about') about: ElementRef;
  employees: Employee[] = [
    {id: 1, name: 'Karel', function: 'Bakker', img_url: 'karel.jpg'},
    {id: 2, name: 'Martine', function: 'Verantwoordelijke verkoop', img_url: 'employee_empty.png'},
    {id: 3, name: 'Nancy', function: 'Verkoopsmedewerker', img_url: 'employee_empty.png'},
    {id: 4, name: 'Elke', function: 'Jobstudent verkoop', img_url: 'elke.jpg'},
    {id: 5, name: 'Lisa', function: 'Jobstudent verkoop', img_url: 'lisa.jpg'},
    {id: 6, name: 'Yvette', function: 'Jobstudent verkoop', img_url: 'employee_empty.png'},
    {id: 7, name: 'Romy', function: 'Jobstudent verkoop', img_url: 'employee_empty.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    console.log(el);
    el.scrollIntoView();
  }

  getViewChild(el) {
    if(el === 'about') {
      return this.about;
    }
  }
}
