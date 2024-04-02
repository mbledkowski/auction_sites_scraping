export default class Sitemap {
  private sitemap() {
    return { "_id": "OLX", "startUrl": [`https://www.olx.pl/${this.url}/q-${this.query}/`], "selectors": [{ "id": "Card", "parentSelectors": ["Pagination"], "type": "SelectorElement", "selector": ".css-1sw7q4x", "multiple": true }, { "id": "Pagination", "parentSelectors": ["_root", "Pagination"], "paginationType": "auto", "type": "SelectorPagination", "selector": "ul.pagination-list li" }, { "id": "Title", "parentSelectors": ["Card"], "type": "SelectorText", "selector": "h6", "multiple": false, "regex": "" }, { "id": "Price", "parentSelectors": ["Card"], "type": "SelectorText", "selector": "p.css-10b0gli", "multiple": false, "regex": "" }, { "id": "Przesyłka OLX", "parentSelectors": ["Card"], "type": "SelectorText", "selector": ".css-qtmiz1", "multiple": false, "regex": "" }, { "id": "Link", "parentSelectors": ["Card"], "type": "SelectorLink", "selector": "a", "multiple": false, "linkType": "linkFromHref" }, { "id": "Description", "parentSelectors": ["Link"], "type": "SelectorText", "selector": "div.css-1t507yq", "multiple": false, "regex": "" }, { "id": "Date", "parentSelectors": ["Link"], "type": "SelectorText", "selector": "span.css-19yf5ek", "multiple": false, "regex": "" }, { "id": "Location", "parentSelectors": ["Link"], "type": "SelectorText", "selector": "p.css-1cju8pu", "multiple": false, "regex": "" }, { "id": "Account Name", "parentSelectors": ["Link"], "type": "SelectorText", "selector": ".css-rnqkz0 h4", "multiple": false, "regex": "" }, { "id": "Account Date", "parentSelectors": ["Link"], "type": "SelectorText", "selector": ".css-rnqkz0 b", "multiple": false, "regex": "" }, { "id": "Account Online", "parentSelectors": ["Link"], "type": "SelectorText", "selector": ".css-rnqkz0 span", "multiple": false, "regex": "" }] }
  }

  constructor(private url: string, private query: string) {
    this.query = encodeURI(this.query.split(' ').join('-'))
  }

  public get() {
    return this.sitemap()
  }
}
