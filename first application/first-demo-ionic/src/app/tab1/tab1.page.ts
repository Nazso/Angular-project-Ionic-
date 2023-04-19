import { Component } from '@angular/core';
import { IonicModule, createAnimation } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {

  animationCtrl: any;
  constructor() {}

  public alertButtons = ['OK'];

  testClickLeft() {
    alert('This is a test click to the left element!')
  }
  
  testClickRight() {
    alert('This is a test click to the right element!')
  }

}
