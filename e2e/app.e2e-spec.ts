import { KoverNgPage } from './app.po';

describe('kover-ng App', function() {
  let page: KoverNgPage;

  beforeEach(() => {
    page = new KoverNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
