import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { WeatherServiceProvider } from '../../providers/weather-service/weather-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weatherInfo: object = {};
  garden = [
    { 'vegetable': 'tomate', 'step': 5},
    { 'vegetable': 'tomate', 'step': 5},
    { 'vegetable': 'tomate', 'step': 5},
    { 'vegetable': 'tomate', 'step': 5},
    { 'vegetable': 'carotte', 'step': 3},
    { 'vegetable': 'carotte', 'step': 3},
    { 'vegetable': 'carotte', 'step': 3},
    { 'vegetable': 'salade', 'step': 1},
    { 'vegetable': 'salade', 'step': 1},
    { 'vegetable': 'salade', 'step': 1},
    { 'vegetable': 'plusSign', 'step': null},
    { 'vegetable': 'plusSign', 'step': null},
    { 'vegetable': 'plusSign', 'step': null},
    { 'vegetable': 'plusSign', 'step': null},
    { 'vegetable': 'plusSign', 'step': null},
    { 'vegetable': 'extend', 'step': null}
  ];

  numbers = [];


  constructor(public navCtrl: NavController, public WeatherService: WeatherServiceProvider) {
    this.numbers = Array(6).fill(1); // [4,4,4,4,4]
  }

  ionViewDidLoad() {
    this.weatherInfo = this.WeatherService.getWeatherInfo();
  }

}
