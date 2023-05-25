import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { DayPipe } from '../pipes/day.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],

  declarations: [
    HomePage,
    DayPipe
  ],

  exports: [
    // DayPipe
  ]
})
export class HomePageModule {}
