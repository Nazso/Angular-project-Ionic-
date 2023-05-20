import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private res: any;

  constructor(
    private wheaterAPI: WeatherService
  ) {}

  ngOnInit() {
    this.getWeatherData()
  }

  getWeatherData() {
    this.wheaterAPI.getWeatherData().subscribe((resp) => {
      this.res = resp;
      console.log(this.res)
    })
  }

}
