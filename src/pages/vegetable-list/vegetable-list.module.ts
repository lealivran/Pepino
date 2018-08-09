import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VegetableListPage } from './vegetable-list';

@NgModule({
  declarations: [
    VegetableListPage,
  ],
  imports: [
    IonicPageModule.forChild(VegetableListPage),
  ],
})
export class VegetableListPageModule {}
