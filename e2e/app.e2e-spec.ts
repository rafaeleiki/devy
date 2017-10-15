import { DevCotucaPage } from './app.po';

describe('dev-cotuca App', function() {
  let page: DevCotucaPage;

  beforeEach(() => {
    page = new DevCotucaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
