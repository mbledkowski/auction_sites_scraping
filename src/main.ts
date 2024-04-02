import { program } from 'commander';
import webscraper from 'web-scraper-headless';
import { Sitemaps } from './sitemap';

program
  .option('-o, --olx [path]', 'Zbieraj dane z OLX.pl\nOpcjonalnie: Kategoria z URL')
  .option('-a, --allegro [path]', 'Zbieraj dane z AllegroLokalnie.pl\nOpcjonalnie: Kategoria z URL')
  .option('-f, --facebook [path]', 'Zbieraj dane z Facebook.com/Marketplace\nOpcjonalnie: Kategoria, bądź lokalizacja z URL')
  .option('-s, --sprzedajemy [params]', 'Zbieraj dane z Sprzedajemy.pl\nOpcjonalnie: Parametry do wyszukiwarki. URL Encoded, bez "inp_text[v]"')
  .option('-q, --query <query>', 'Zapytanie do wyszukania')

program.parse();

const options = program.opts();

const scraperOptions = { delay: 10, pageLoadDelay: 10, browser: 'headless' }

const sitemaps = new Sitemaps(options.olx, options.allegro, options.facebook, options.sprzedajemy, options.query).getSitemaps();

for (const key in sitemaps) {
  webscraper(sitemaps[key as keyof typeof sitemaps], scraperOptions).then((data: Object) => console.log(data));
}
