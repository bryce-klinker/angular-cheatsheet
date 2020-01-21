import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {closeSidenav, toggleSidenav} from '../actions';
import {AppState} from '../app.state';

export interface SidenavState {
  isOpen: boolean;
}

const initialState: SidenavState = {
  isOpen: false,
};

const reducer = createReducer(
  initialState,
  on(toggleSidenav, (state) => ({...state, isOpen: !state.isOpen})),
  on(closeSidenav, (state) => ({...state, isOpen: false }))
);

export function sidenavReducer(state: SidenavState, action: Action): SidenavState {
  return reducer(state, action);
}

const selectSidenav = (state: AppState) => state.sidenav;
export const selectIsSidenavOpen = createSelector(selectSidenav, s => s.isOpen);
