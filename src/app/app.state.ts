import {SidenavState, LoadingState} from './reducers';

export interface AppState {
  sidenav: SidenavState;
  loading: LoadingState;
}
