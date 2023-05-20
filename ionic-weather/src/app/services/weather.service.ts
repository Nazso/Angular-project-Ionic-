import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getWeatherData(): Observable<any> {
    let lat = '47.50626635982479';
    let lon = '18.977508638535138';
    let apiId = '6910680d9e0a588865023bca7bb32739';
    let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`;

    return this.http.get(queryString)
    
  }

}
