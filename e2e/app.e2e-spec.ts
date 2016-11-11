import { ProvestPage } from './app.po';

describe('provest App', function() {
  let page: ProvestPage;

  beforeEach(() => {
    page = new ProvestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
