import { browser, element, by } from 'protractor';

export class MaterialDashboardAngularPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  getMainAreaTitle() {
    return element(by.css('a.navbar-brand')).getText();
  }
}
