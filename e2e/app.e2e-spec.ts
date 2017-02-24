import { PrimercomonentePage } from './app.po';

describe('primercomonente App', () => {
  let page: PrimercomonentePage;

  beforeEach(() => {
    page = new PrimercomonentePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
