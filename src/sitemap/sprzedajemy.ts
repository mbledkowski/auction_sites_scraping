export default class Sitemap {
  private sitemap() {
    return { "_id": "Sprzedajemy", "startUrl": [`https://sprzedajemy.pl/szukaj?inp_text%5Bv%5D=${this.query}&${this.params}`], "selectors": [{ "id": "Pagination", "parentSelectors": ["_root", "Pagination"], "paginationType": "auto", "type": "SelectorPagination", "selector": ".next a" }, { "id": "Card", "parentSelectors": ["Pagination"], "type": "SelectorElement", "selector": "article", "multiple": true }, { "id": "Title", "parentSelectors": ["Card"], "type": "SelectorText", "selector": ".title a", "multiple": false, "regex": "" }, { "id": "Date", "parentSelectors": ["Card"], "type": "SelectorText", "selector": "time", "multiple": false, "regex": "" }, { "id": "Price", "parentSelectors": ["Card"], "type": "SelectorText", "selector": "span.price", "multiple": false, "regex": "" }, { "id": "Location", "parentSelectors": ["Card"], "type": "SelectorText", "selector": "strong", "multiple": false, "regex": "" }, { "id": "Link", "parentSelectors": ["Card"], "type": "SelectorLink", "selector": ".title a", "multiple": false, "linkType": "linkFromHref" }, { "id": "Description", "parentSelectors": ["Link"], "type": "SelectorText", "selector": "div.offerDescription", "multiple": false, "regex": "" }, { "id": "Account Name", "parentSelectors": ["Link"], "type": "SelectorText", "selector": "a strong.name", "multiple": false, "regex": "" }, { "id": "Account Date", "parentSelectors": ["Link"], "type": "SelectorText", "selector": ".user-contact-item.user-contact-data-box span.active-since", "multiple": false, "regex": "" }, { "id": "Account Type", "parentSelectors": ["Link"], "type": "SelectorText", "selector": "li.item:nth-of-type(1) strong", "multiple": false, "regex": "" }, { "id": "Available", "parentSelectors": ["Link"], "type": "SelectorText", "selector": ".availability strong", "multiple": false, "regex": "" }] }
  }

  constructor(private params: string, private query: string) {
    this.query = encodeURI(this.query.split(' ').join('-'))
  }

  public get() {
    return this.sitemap()
  }
}

