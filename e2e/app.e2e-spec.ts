import { N0agencyPage } from './app.po';

describe('n0agency App', () => {
  let page: N0agencyPage;

  beforeEach(() => {
    page = new N0agencyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
