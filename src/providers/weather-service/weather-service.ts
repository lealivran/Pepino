import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Weather {
  cityName: string;
  temp: number;
  icon: string;

  constructor(cityName: string, temp : number, icon: string) {
    this.cityName = cityName;
    this.temp = temp;
    this.icon = icon;
  }
}

@Injectable()
export class WeatherServiceProvider {

  currentWeather: Weather;

  public getWeatherInfo() : Weather {
    this.currentWeather = new Weather('Lille', 25, 'sunny');
    return this.currentWeather;
  }

}
