import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VegetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vegetable',
  templateUrl: 'vegetable.html',
})
export class VegetablePage {
  value: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = "content";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VegetablePage');
  }

}
