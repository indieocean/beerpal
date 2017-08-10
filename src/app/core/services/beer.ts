import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Beer } from 'app/beer/models/beer';
import { Search } from 'app/beer/models/search';

@Injectable()
export class BeerService {
  private API_KEY = "6680bbc3b2591b5dddc04915f8fde8fc";
  private API_PATH = 'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers';

  constructor(private http: Http) {}

  getBeers(search: Search): Observable<Beer> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.API_KEY);
    params.set('styleId', search.styleId.toString());
    params.set('isOrganic', search.isOrganic);
    params.set('withBreweries', search.withBreweries);
    params.set('p', search.p.toString());

    let options = new RequestOptions();
    options.params = params;

    return this.http
      .get(this.API_PATH, options)
      .map(result => result.json() || []);
  }

}
