import {Action, createSelector} from '@ngrx/store';
import {AppState} from '../app.state';

export interface LoadingState {
  [key: string]: boolean;
}

const initialState: LoadingState = {};

export function loadingReducer(state: LoadingState = initialState, action: Action): LoadingState {
  const loadingKey = getLoadingKeyFromActionType(action.type);
  return {
    ...state,
    [loadingKey]: getIsLoadingFromActionType(action.type),
  };
}

function getLoadingKeyFromActionType(actionType: string): string {
  return actionType.replace(/\s(Request|Success|Failed)/g, '');
}

function getIsLoadingFromActionType(actionType: string): boolean {
  return actionType.match(/(Request)/) !== null;
}

function selectLoading(state: AppState) {
  return state.loading;
}

function isAnythingLoading(state: LoadingState) {
  return Object.keys(state).length > 0 && Object.keys(state).some(key => state[key]);
}

export const selectIsLoading = createSelector(
  selectLoading,
  state => isAnythingLoading(state)
);
