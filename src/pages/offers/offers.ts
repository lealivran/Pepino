import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GardenerPage } from '../gardener/gardener';
import { InAppPurchase } from '@ionic-native/in-app-purchase';

/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iap: InAppPurchase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');

    this.iap
     .getProducts(['prod1', 'prod2'])
     .then((products) => {
       console.log(products);
        //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
     })
     .catch((err) => {
       console.log(err);
     });
  }

  selectOffer() {
    this.navCtrl.setRoot(GardenerPage);
  }

}
