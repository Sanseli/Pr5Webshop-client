import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
    templateUrl: './afdrukken-keuzelijst.component.html',
    styleUrls: ['./afdrukken-keuzelijst.component.css']
})
export class AfdrukkenKeuzelijstComponent {
    constructor(private buttomSheetRef: MatBottomSheetRef<AfdrukkenKeuzelijstComponent>) {}

    openLink(event: MouseEvent): void {
        this.buttomSheetRef.dismiss();
        event.preventDefault();
    }

    bekijkBestellingen() {
    }

    printVolgende() {
    }

    printWeek() {

    }

    printMaand() {
        
    }
}
