import { Action } from '@ngrx/store';
import { Beer } from '../models/beer';
import { Search } from '../models/search';

export const APICALL = '[Beer] Api Call';
export const APICALL_COMPLETE = '[Beer] Api Call Complete';

export class ApiCallAction implements Action {
  readonly type = APICALL;

  constructor(public payload: Search) {}
}

export class ApiCallCompleteAction implements Action {
  readonly type = APICALL_COMPLETE;

  constructor(public payload: Beer) {}
}

export type Actions =
  | ApiCallAction
  | ApiCallCompleteAction