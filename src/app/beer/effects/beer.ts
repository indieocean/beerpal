import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { of } from 'rxjs/observable/of';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Beer } from '../models/beer'
import { BeerService } from 'app/core/services/beer';
import * as beer from '../actions/beer';


@Injectable()
export class BeerEffects {
    constructor(
        private actions$: Actions,
        private beerService: BeerService
    ) { }

    @Effect()
    getBeers$: Observable<Action> = this.actions$
        .ofType(beer.APICALL)
        .map(toPayload)
        .switchMap(params => {

        return this.beerService
            .getBeers(params)
            .map((res: Beer) => new beer.ApiCallCompleteAction(res))
            .catch(() => of(new beer.ApiCallCompleteAction(null)))
        });
}