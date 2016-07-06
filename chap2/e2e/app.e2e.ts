import { Chap2Page } from './app.po';

describe('chap2 App', function() {
  let page: Chap2Page;

  beforeEach(() => {
    page = new Chap2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('chap2 works!');
  });
});
