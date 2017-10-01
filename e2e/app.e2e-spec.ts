import { MaterialDashboardAngularPage } from './app.po';

describe('material-dashboard-angular App', () => {
  let page: MaterialDashboardAngularPage;

  beforeEach(() => {
    page = new MaterialDashboardAngularPage();
  });

  it('should display an app name in sidebar menu title', () => {
    page.navigateTo();
    expect(page.getMainAreaTitle()).toContain('Dashboard');
  });
});
