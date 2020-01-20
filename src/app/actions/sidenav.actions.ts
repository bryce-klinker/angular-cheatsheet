import {createAction} from '@ngrx/store';

export const SIDENAV_ACTION_TYPES = {
  TOGGLE: '[Sidenav] Toggle Sidenav',
};

export const toggleSidenav = createAction(SIDENAV_ACTION_TYPES.TOGGLE);
