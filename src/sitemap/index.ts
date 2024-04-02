import Olx from './olx';
import Allegro from './allegro';
import Facebook from './facebook';
import Sprzedajemy from './sprzedajemy';

export class Sitemaps {
  private sitemaps: { olx?: Object, allegro?: Object, facebook?: Object, sprzedajemy?: Object } = {};
  constructor(private olx: boolean | string, private allegro: boolean | string, private facebook: boolean | string, private sprzedajemy: boolean | string, private query: string) {
    if (this.olx) {
      let olxInstance: Olx;
      if (this.olx === true) {
        olxInstance = new Olx("", query);
      } else {
        olxInstance = new Olx(this.olx, query);
      }
      this.sitemaps.olx = olxInstance.get();
    }
    if (this.allegro) {
      let allegroInstance: Allegro;
      if (this.allegro === true) {
        allegroInstance = new Allegro("", query);
      } else {
        allegroInstance = new Allegro(this.allegro, query);
      }
      this.sitemaps.allegro = allegroInstance.get();
    }
    if (this.facebook) {
      let facebookInstance: Facebook;
      if (this.facebook === true) {
        facebookInstance = new Facebook("", query);
      } else {
        facebookInstance = new Facebook(this.facebook, query);
      }
      this.sitemaps.facebook = facebookInstance.get();
    }
    if (this.sprzedajemy) {
      let sprzedajemyInstance: Sprzedajemy;
      if (this.sprzedajemy === true) {
        sprzedajemyInstance = new Sprzedajemy("", query);
      } else {
        sprzedajemyInstance = new Sprzedajemy(this.sprzedajemy, query);
      }
      this.sitemaps.sprzedajemy = sprzedajemyInstance.get();
    }
  }

  public getSitemaps() {
    return this.sitemaps;
  }
}
