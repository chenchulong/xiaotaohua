import { XthAppPage } from './app.po';

describe('xth-app App', () => {
  let page: XthAppPage;

  beforeEach(() => {
    page = new XthAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
