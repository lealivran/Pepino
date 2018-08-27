import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { WeatherServiceProvider } from '../../providers/weather-service/weather-service';
import { VegetablePage } from '../vegetable/vegetable';
import { VegetableListPage } from '../vegetable-list/vegetable-list';
import { OffersPage } from '../offers/offers';



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
    { 'vegetable': 'salade', 'step': 1}
  ];

  icons = [
    { 'vegetable': 'plusSign', 'step': null},
    { 'vegetable': 'plusSign', 'step': null},
    { 'vegetable': 'plusSign', 'step': null},
    { 'vegetable': 'plusSign', 'step': null},
    { 'vegetable': 'plusSign', 'step': null},
  ];

  extend = [
    { 'vegetable': 'extend', 'step': null}
  ];

  numbers = [];


  constructor(public navCtrl: NavController, public WeatherService: WeatherServiceProvider) {
    this.numbers = Array(6).fill(1); // [4,4,4,4,4]
  }

  ionViewDidLoad() {
    this.weatherInfo = this.WeatherService.getWeatherInfo();
  }

  pushVegetable() {
    this.navCtrl.push(VegetablePage);
  }

  pushList() {
    this.navCtrl.push(VegetableListPage);
  }

  pushOffers() {
    this.navCtrl.push(OffersPage);
  }

}
