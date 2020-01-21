import {Action, createSelector} from '@ngrx/store';
import {SIDENAV_ACTION_TYPES} from '../actions';
import {AppState} from '../app.state';

export interface SidenavState {
  isOpen: boolean;
}

const initialState: SidenavState = {
  isOpen: false,
};

export function sidenavReducer(state: SidenavState = initialState, action: Action): SidenavState {
  switch (action.type) {
    case SIDENAV_ACTION_TYPES.TOGGLE:
      return {...state, isOpen: !state.isOpen};
    case SIDENAV_ACTION_TYPES.CLOSE:
      return {...state, isOpen: false};
    default:
      return state;
  }
}

const selectSidenav = (state: AppState) => state.sidenav;
export const selectIsSidenavOpen = createSelector(selectSidenav, s => s.isOpen);
