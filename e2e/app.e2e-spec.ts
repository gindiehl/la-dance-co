import { LaDancePage } from './app.po';

describe('la-dance App', () => {
  let page: LaDancePage;

  beforeEach(() => {
    page = new LaDancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
