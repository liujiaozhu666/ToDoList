import { AngulardemoPage } from './app.po';

describe('angulardemo App', function() {
  let page: AngulardemoPage;

  beforeEach(() => {
    page = new AngulardemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
