import { MyMeanAppPage } from './app.po';

describe('my-mean-app App', () => {
  let page: MyMeanAppPage;

  beforeEach(() => {
    page = new MyMeanAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
