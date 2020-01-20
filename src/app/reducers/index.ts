import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {AppState} from '../app.state';
import {sidenavReducer} from './sidenav.reducer';

export * from './sidenav.reducer';

export const reducers: ActionReducerMap<AppState> = {
  sidenav: sidenavReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
