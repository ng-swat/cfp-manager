import { CfpPage } from './app.po';

describe('cfp App', () => {
  let page: CfpPage;

  beforeEach(() => {
    page = new CfpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
