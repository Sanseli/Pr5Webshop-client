import { Component, OnInit, ElementRef } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private home: HomeComponent, private router: Router) { }

  ngOnInit() {
  }

  scroll(el) {
    let element = this.home.getViewChild(el) ;
    console.log(element);
    //element.scrollIntoView();
  }

  toShop() {
    this.router.navigate(['/shop']);
  }
}
