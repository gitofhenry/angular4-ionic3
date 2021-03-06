import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, Tabs } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';
import { MainPage } from '../main/main';
import { ScrollableTabs } from '../../components/scrollable-tabs/scrollable-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('ionTabs') tabRef: Tabs;
  mainPage = MainPage;
  index: number = 3;
  tabsColor: string = "default";
  tabsMode: string = "md";
  tabsPlacement: string = "top";

  tabToShow: Array<boolean> = [true, true, true, true, true, true, true, true, true];
  scrollableTabsopts: any = {};

  constructor(public navCtrl: NavController) {

  }

  refreshScrollbarTabs() {
    this.scrollableTabsopts = { refresh: true };
  }
  
}
