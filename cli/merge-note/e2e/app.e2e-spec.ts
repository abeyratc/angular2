import { MergeNotePage } from './app.po';

describe('merge-note App', () => {
  let page: MergeNotePage;

  beforeEach(() => {
    page = new MergeNotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
