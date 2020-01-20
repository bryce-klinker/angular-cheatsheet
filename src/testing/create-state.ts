import {Action, combineReducers} from '@ngrx/store';

import {AppState} from '../app/app.state';
import {reducers} from '../app/reducers';
import {testingInit} from './init.action';

export function createState(...actions: Action[]): AppState {
  const reducer = combineReducers(reducers);

  const initialState = reducer(undefined, testingInit());
  return actions.reduce((state, action) => reducer(state, action), initialState);
}
