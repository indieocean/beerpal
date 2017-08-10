import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromBeer from '../reducers';
import * as beer from '../actions/beer';
import { Beer } from '../models/beer';
import { Search } from '../models/search';

@Component({
    selector: 'bp-beer-dashboard-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <bp-beer-list [beer]="beer$ | async"></bp-beer-list>
        <img src="assets/img/loader.gif" *ngIf="loading | async" class="center-block">
    `
})

export class BeerDashboardPageComponent implements OnInit {
    beer$: Observable<Beer>;
    loading: Observable<boolean>;

    constructor(private store: Store<fromBeer.State>) { 
        this.beer$ = this.store.select(fromBeer.getBeer)
        this.loading = this.store.select(fromBeer.getLoading)
    }

    ngOnInit() { 

        const search: Search = {
            isOrganic: 'N',
            p: 5,
            styleId: 30,
            withBreweries: 'N'
        };

        this.store.dispatch(new beer.ApiCallAction(search));
        

    }
}