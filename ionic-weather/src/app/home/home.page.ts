import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public res: any;
  public date = '';
  public description = [];
  
  constructor(
    private wheaterAPI: WeatherService
    ) {}
    
    ngOnInit() {
      this.getWeatherData()
      this.date = new Date().toDateString();
      console.log(this.date);
    }
    
    getWeatherData() {
      this.wheaterAPI.getWeatherData().subscribe((resp) => {
        this.res = resp;
        // this.description = this.res.daily.weathercode
        console.log(this.res)
        // console.log(this.description)
      })
    }
    

}
