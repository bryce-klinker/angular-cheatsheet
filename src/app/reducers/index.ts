import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {AppState} from '../app.state';
import {sidenavReducer} from './sidenav.reducer';
import {loadingReducer} from './loading.reducer';

export * from './sidenav.reducer';
export * from './loading.reducer';

export const reducers: ActionReducerMap<AppState> = {
  sidenav: sidenavReducer,
  loading: loadingReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
