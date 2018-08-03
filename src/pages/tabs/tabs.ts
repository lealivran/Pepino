import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading} from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';
import { GardenerPage } from '../gardener/gardener';
import { AccountPage } from '../account/account';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalendarPage;
  tab3Root = GardenerPage;
  tab4Root = AccountPage;

  constructor() {

  }
}
