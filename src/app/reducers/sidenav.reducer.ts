import {createReducer, createSelector, on} from '@ngrx/store';
import {closeSidenav, toggleSidenav} from '../actions';
import {AppState} from '../app.state';

export interface SidenavState {
  isOpen: boolean;
}

const initialState: SidenavState = {
  isOpen: false,
};

export const sidenavReducer = createReducer(
  initialState,
  on(toggleSidenav, (state) => ({...state, isOpen: !state.isOpen})),
  on(closeSidenav, (state) => ({...state, isOpen: false }))
);

const selectSidenav = (state: AppState) => state.sidenav;
export const selectIsSidenavOpen = createSelector(selectSidenav, s => s.isOpen);
