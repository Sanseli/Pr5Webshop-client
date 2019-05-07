import { Component, OnInit, ElementRef } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private home: HomeComponent) { }

  ngOnInit() {
  }

  scroll(el) {
    let element = this.home.getViewChild(el) ;
    console.log(element);
    //element.scrollIntoView();
  }
}
