import {createAction} from '@ngrx/store';

export const SIDENAV_ACTION_TYPES = {
  TOGGLE: '[Sidenav] Toggle Sidenav',
  CLOSE: '[Sidenav] Close Sidenav',
};

export const toggleSidenav = createAction(SIDENAV_ACTION_TYPES.TOGGLE);
export const closeSidenav = createAction(SIDENAV_ACTION_TYPES.CLOSE);
