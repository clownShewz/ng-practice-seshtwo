import { NgPracticeSeshtwoPage } from './app.po';

describe('ng-practice-seshtwo App', () => {
  let page: NgPracticeSeshtwoPage;

  beforeEach(() => {
    page = new NgPracticeSeshtwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
