import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { WelcomePage } from '../pages/welcome/welcome';
import { CalendarPage } from '../pages/calendar/calendar';
import { SearchPage } from '../pages/search/search';
import { AccountPage } from '../pages/account/account';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { VegetablePage } from '../pages/vegetable/vegetable';
import { OffersPage } from '../pages/offers/offers';
import { PaymentPage } from '../pages/payment/payment';
import { GardenerPage } from '../pages/gardener/gardener';
import { VegetableListPage } from '../pages/vegetable-list/vegetable-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { WeatherServiceProvider } from '../providers/weather-service/weather-service';

import { CalendarModule } from 'ion2-calendar';
import { InAppPurchase } from '@ionic-native/in-app-purchase';

@NgModule({
  declarations: [
    MyApp,
    CalendarPage,
    SearchPage,
    AccountPage,
    HomePage,
    TabsPage,
    VegetablePage,
    PaymentPage,
    OffersPage,
    GardenerPage,
    VegetableListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Retour'
     }),
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarPage,
    SearchPage,
    AccountPage,
    HomePage,
    TabsPage,
    VegetablePage,
    PaymentPage,
    OffersPage,
    GardenerPage,
    VegetableListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    WeatherServiceProvider,
    InAppPurchase
  ]
})
export class AppModule {}
