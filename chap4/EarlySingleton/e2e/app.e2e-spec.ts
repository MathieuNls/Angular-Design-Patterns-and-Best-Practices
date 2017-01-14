import { Chap3Page } from './app.po';

describe('chap3 App', function() {
  let page: Chap3Page;

  beforeEach(() => {
    page = new Chap3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
