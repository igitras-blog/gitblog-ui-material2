import { GitblogUiMaterial2Page } from './app.po';

describe('gitblog-ui-material2 App', function() {
  let page: GitblogUiMaterial2Page;

  beforeEach(() => {
    page = new GitblogUiMaterial2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
