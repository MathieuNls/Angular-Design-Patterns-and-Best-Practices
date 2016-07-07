export class Chap2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('chap2-app h1')).getText();
  }
}
