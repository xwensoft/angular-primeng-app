import { EcommerceServiceFrontendPage } from './app.po';

describe('ecommerce-service-frontend App', () => {
  let page: EcommerceServiceFrontendPage;

  beforeEach(() => {
    page = new EcommerceServiceFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
