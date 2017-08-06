import { BeerpalPage } from './app.po';

describe('beerpal App', () => {
  let page: BeerpalPage;

  beforeEach(() => {
    page = new BeerpalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
