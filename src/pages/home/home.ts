import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { WeatherServiceProvider } from '../../providers/weather-service/weather-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weatherInfo: object = {};

  constructor(public navCtrl: NavController, public WeatherService: WeatherServiceProvider) {

  }

  ionViewDidLoad() {
    this.weatherInfo = this.WeatherService.getWeatherInfo();
  }

}
