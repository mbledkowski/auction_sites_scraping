export default class Sitemap {
  private sitemap() {
    return { "_id": "ALLEGROLOKALNIE", "startUrl": [`https://allegrolokalnie.pl/oferty/${this.url}/q/${this.query}?sort=price-asc`], "selectors": [{ "id": "Pagination", "parentSelectors": ["_root", "Pagination"], "paginationType": "auto", "type": "SelectorPagination", "selector": ".ml-pagination > a:last-child" }, { "id": "Card", "parentSelectors": ["Pagination"], "type": "SelectorElement", "selector": ".mlc-itembox__container", "multiple": true }, { "id": "Title", "parentSelectors": ["Card"], "type": "SelectorText", "selector": ".mlc-itembox__title", "multiple": false, "regex": "" }, { "id": "Paid", "parentSelectors": ["Card"], "type": "SelectorText", "selector": ".mlc-itembox__promoted-button", "multiple": false, "regex": "" }, { "id": "Price", "parentSelectors": ["Card"], "type": "SelectorText", "selector": "span.ml-offer-price", "multiple": false, "regex": "" }, { "id": "Allegro Smart", "parentSelectors": ["Card"], "type": "SelectorText", "selector": "span.mlc-smart-icon", "multiple": false, "regex": "" }, { "id": "Location", "parentSelectors": ["Card"], "type": "SelectorText", "selector": "div[itemprop='areaServed']", "multiple": false, "regex": "" }, { "id": "Link", "parentSelectors": ["Card"], "type": "SelectorLink", "selector": "a", "multiple": false, "linkType": "linkFromHref" }, { "id": "Description", "parentSelectors": ["Link"], "type": "SelectorText", "selector": ".mlc-offer__offer-details .ml-card > div", "multiple": false, "regex": "" }, { "id": "Account Name", "parentSelectors": ["Link"], "type": "SelectorText", "selector": "h2.mlc-seller-details-header__heading", "multiple": false, "regex": "" }, { "id": "Account Date", "parentSelectors": ["Link"], "type": "SelectorText", "selector": "p.mlc-seller-details-header__allegro-age", "multiple": false, "regex": "" }, { "id": "Account isBusiness", "parentSelectors": ["Link"], "type": "SelectorText", "selector": "li.ml-badges__badge--c2c", "multiple": false, "regex": "" }] }
  }

  constructor(private url: string, private query: string) {
    this.query = encodeURI(this.query)
  }

  public get() {
    return this.sitemap()
  }
}

