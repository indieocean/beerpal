import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { Beer } from '../models/beer';
import { Search } from '../models/search';

import * as beer from '../actions/beer';
import * as collection from '../actions/beer';

export interface State {
    beer: Beer,
    loading: boolean;
    params: Search;
}

const initialState: State = {
    beer: null,
    loading: false,
    params: null
};

export function reducer(state = initialState, action: beer.Actions): State {
    switch (action.type) {
        case beer.APICALL: {
            const params = action.payload;

            return Object.assign({}, state, {
                beer: null,
                loading: true,
                params: params
            });
        }
        case beer.APICALL_COMPLETE: {            
            const beer = action.payload;
            
            return Object.assign({}, state, {
                beer: beer,
                loading: false,
                params: state.params
            });
        }
        default: {
            return null;
        }
    }
}