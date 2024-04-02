export default class Sitemap {
  private sitemap() {
    return { "_id": "FBMARKETPLACE", "startUrl": [`https://www.facebook.com/marketplace/${this.url}/search/?query=${this.query}&sortBy=price_ascend`], "selectors": [{ "id": "Card", "parentSelectors": ["_root"], "type": "SelectorElement", "selector": "div.xkrivgy:nth-of-type(1) div.x1r8uery", "multiple": true }, { "id": "Price", "parentSelectors": ["Card"], "type": "SelectorText", "selector": "span.x1lkfr7t", "multiple": false, "regex": "" }, { "id": "Title", "parentSelectors": ["Card"], "type": "SelectorText", "selector": ".x4zkp8e span", "multiple": false, "regex": "" }, { "id": "City", "parentSelectors": ["Card"], "type": "SelectorText", "selector": "span.xlyipyv", "multiple": false, "regex": "" }, { "id": "Link", "parentSelectors": ["Card"], "type": "SelectorLink", "selector": "a", "multiple": false, "linkType": "linkFromHref" }, { "id": "Date", "parentSelectors": ["Link"], "type": "SelectorText", "selector": ".x1yztbdb span.html-span", "multiple": false, "regex": "" }, { "id": "Description", "parentSelectors": ["Link"], "type": "SelectorText", "selector": ".x126k92a span", "multiple": false, "regex": "" }, { "id": "Seller name", "parentSelectors": ["Link"], "type": "SelectorText", "selector": ".xt0psk2 span.x6prxxf.x1s688f", "multiple": false, "regex": "" }, { "id": "Seller profile", "parentSelectors": ["Link"], "type": "SelectorLink", "selector": ".x1lliihq div div a.xt0b8zv", "multiple": false, "linkType": "linkFromHref" }, { "id": "Seller join date", "parentSelectors": ["Link"], "type": "SelectorText", "selector": ".xamitd3 span.x4zkp8e.xo1l8bm", "multiple": false, "regex": "" }] }
  }

  constructor(private url: string, private query: string) {
    this.query = encodeURI(this.query.split(' ').join('+'))
  }

  public get() {
    return this.sitemap()
  }
}

