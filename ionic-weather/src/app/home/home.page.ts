import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  placeOfWeather = 'Budapest'

  // placeOfWeather = new FormGroup({
  //   place: new FormControl('')
  // });

  public res: any;
  public date = '';
  public description = [];
  
  constructor(
    private wheaterAPI: WeatherService,
    private fb: FormBuilder
    ) {
      this.wheaterAPI.placeOfWeather = this.placeOfWeather
    }
    
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
