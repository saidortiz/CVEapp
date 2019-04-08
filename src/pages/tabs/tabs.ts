import { Component } from '@angular/core';


import { CVEPage } from '../CVE/CVE';
import { AboutPage } from '../about/about';
import { settingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CVEPage;
  tab2Root = AboutPage;
  tab3Root = settingsPage;

  constructor() {

  }
}
