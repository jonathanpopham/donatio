import { DonatioPage } from './app.po';

describe('donatio App', function() {
  let page: DonatioPage;

  beforeEach(() => {
    page = new DonatioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
