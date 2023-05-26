import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // placeOfWeather = 'Athen'

  // placeOfWeather = this.fb.group({
  //   place: '',
  // })

  // placeOfWeather: any = new FormControl('');

  // placeOfWeather: FormGroup = new FormGroup({
  //   place : new FormControl('')
  // });

  public res: any;
  public date = '';
  public description = [];
  // public place = '';
  
  constructor(
    private wheaterAPI: WeatherService,
    private fb: FormBuilder
    ) {
      // this.wheaterAPI.placeOfWeather = this.place
    }
    
    ngOnInit() {
      this.getWeatherData()
      this.date = new Date().toDateString();
      console.log(this.date);

      // this.onSubmit()

    }

    // onSubmit() {
    //   this.place = this.placeOfWeather.value.place;
    //   console.log(this.place)
    // }
    
    getWeatherData() {
      this.wheaterAPI.getWeatherData().subscribe((resp) => {
        this.res = resp;
        // this.description = this.res.daily.weathercode
        console.log(this.res)
        // console.log(this.description)
      })
    }

    doRefresh(event: any) {
      console.log('Ion-refresh running...');

      this.wheaterAPI.getWeatherData().subscribe((response) => {
        this.res = response;

        console.log(this.res)
        console.log('Done reloading weather data.');

        event.target.complete();
      })
    }

}
