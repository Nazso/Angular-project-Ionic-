import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public placeOfWeather: any;

  constructor(
    private http: HttpClient
  ) { 
    console.log(this.placeOfWeather)
  }

  getWeatherData(): Observable<any> {
    let lat = '47.50626635982479';
    let lon = '18.977508638535138';
    // let lat = '-37.840935';
    // let lon = '144.946457';
    // let cnt = '8'
    // let apiId = '6910680d9e0a588865023bca7bb32739';
    // let apiId = 'aa57b8ae52eec733f6cef78ebcb67cba';
    // let apiId = '6fa1bf0327b6fed8dbaf5f5c13dc7ad1';
    let apiIdNext = 'ffa1225d38f04fd9953214103232005';
    // let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiId}`;
    // let queryString = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiId}`;
    // let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${apiId}`;
    // let queryString = `https://api.openweathermap.org/data/2.5/weather/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiId}`;
    // let queryString = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiId}`;
    // let queryString = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&daily=temperature_2m_min&daily=weathercode&timezone=auto`;

    // let queryString = `http://api.weatherapi.com/v1/forecast.json?key=ffa1225d38f04fd9953214103232005&q=Budapest&days=8&aqi=no&alerts=no`;
    let queryString = `http://api.weatherapi.com/v1/forecast.json?key=ffa1225d38f04fd9953214103232005&q=${this.placeOfWeather}&days=8&aqi=no&alerts=no`;
    

    return this.http.get(queryString)
    
  }

}
