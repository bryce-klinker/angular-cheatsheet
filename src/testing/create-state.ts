import {Action, combineReducers} from '@ngrx/store';

import {AppState} from '../app/app.state';
import {reducers} from '../app/reducers';

export function createState(...actions: Action[]): AppState {
  const reducer = combineReducers(reducers);

  return actions.reduce((state, action) => reducer(state, action), undefined);
}
