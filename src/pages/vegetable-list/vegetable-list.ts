import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VegetableListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vegetable-list',
  templateUrl: 'vegetable-list.html',
})
export class VegetableListPage {

  vegetableList = [
    { 'slug': 'aubergine', 'name': 'Aubergine'},
    { 'slug': 'champignon', 'name': 'Champignon'},
    { 'slug': 'chou-fleur', 'name': 'Chou-Fleur'},
    { 'slug': 'courgette', 'name': 'Courgette'},
    { 'slug': 'oignon', 'name': 'Oignon'},
    { 'slug': 'panais', 'name': 'Panais'},
    { 'slug': 'poireau', 'name': 'Poireau'},
    { 'slug': 'poivron', 'name': 'Poivron'},
    { 'slug': 'pomme-de-terre', 'name': 'Pomme de Terre'},
    { 'slug': 'potiron', 'name': 'Potiron'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VegetableListPage');
  }

}
