import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { WelcomePage } from '../pages/welcome/welcome';
import { CalendarPage } from '../pages/calendar/calendar';
import { GardenerPage } from '../pages/gardener/gardener';
import { AccountPage } from '../pages/account/account';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { VegetablePage } from '../pages/vegetable/vegetable';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { WeatherServiceProvider } from '../providers/weather-service/weather-service';

import { CalendarModule } from 'ion2-calendar';

@NgModule({
  declarations: [
    MyApp,
    CalendarPage,
    GardenerPage,
    AccountPage,
    HomePage,
    TabsPage,
    VegetablePage
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
    GardenerPage,
    AccountPage,
    HomePage,
    TabsPage,
    VegetablePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    WeatherServiceProvider
  ]
})
export class AppModule {}
