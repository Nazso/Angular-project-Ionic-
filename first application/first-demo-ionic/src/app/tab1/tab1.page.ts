import { Component } from '@angular/core';
import { IonicModule, createAnimation } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule, NgFor],
})
export class Tab1Page {

  public cardContents = [
    {
      id: 1,
      header: "Card title One",
      subHeader: "Card subtitle",
      message: "Here's a small text description for the card content and try to use ngFor. Nothing more, nothing less."
    },
    {
      id: 2,
      header: "Card title Two",
      subHeader: "Card subtitle",
      message: "Here's a small text description for the second card content and try to use ngFor. Nothing more, nothing less."
    },
    {
      id: 3,
      header: "Card title Three",
      subHeader: "Card subtitle",
      message: "Here's a small text description for the rhird card content and try to use ngFor. Nothing more, nothing less."
    }
  ];

  // trackItems(index: number, itemObject: any) {
  //   return itemObject.id;
  // }

  animationCtrl: any;
  constructor() {}

  public alertButtons = ['OK'];

  testClickLeft() {
    alert('This is a test click on the left element!')
  }
  
  testClickRight() {
    alert('This is a test click on the right element!')
  }

}
