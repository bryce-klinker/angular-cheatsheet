import {Action, combineReducers} from '@ngrx/store';

import {AppState} from '../app/app.state';
import {reducers} from '../app/reducers';
import {testingInit} from './init.action';
import {RECIPES_FEATURE_KEY, recipesReducer} from '../app/recipes/reducers/recipes.reducer';

export function combineAllReducers() {
  return {
    ...reducers,
    [RECIPES_FEATURE_KEY]: recipesReducer
  };
}

export function createState(...actions: Action[]): AppState {
  const reducer = combineReducers(combineAllReducers());

  const initialState = reducer(undefined, testingInit());
  return actions.reduce((state, action) => reducer(state, action), initialState);
}
