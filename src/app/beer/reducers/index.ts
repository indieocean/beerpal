import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromBeer from './beer';

export interface BeerState {
  beer: fromBeer.State;
}

export interface State {
  'beer': BeerState;
}

export const reducers = {
  beer: fromBeer.reducer
};

export const getBeerState = createFeatureSelector<BeerState>('beer');

export const getBeerData = createSelector(
  getBeerState,
  (state: BeerState) => state.beer.beer.data
);

export const getBeer = createSelector(
  getBeerState,
  (state: BeerState) => state.beer.beer
);

export const getLoading = createSelector(
  getBeerState,
  (state: BeerState) => state.beer.loading.valueOf()
);
