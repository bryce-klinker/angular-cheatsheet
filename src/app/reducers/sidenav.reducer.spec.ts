import {testingInit} from '../../testing';
import {sidenavReducer} from './sidenav.reducer';
import {closeSidenav, toggleSidenav} from '../actions';

describe('sidenavReducer', () => {
  it('should initialize to closed sidenav', () => {
    const state = sidenavReducer(undefined, testingInit());
    expect(state.isOpen).toEqual(false);
  });

  it('should open sidenav', () => {
    let state = sidenavReducer(undefined, testingInit());
    state = sidenavReducer(state, toggleSidenav());

    expect(state.isOpen).toEqual(true);
  });

  it('should close sidenav', () => {
    let state = sidenavReducer(undefined, testingInit());
    state = sidenavReducer(state, toggleSidenav());
    state = sidenavReducer(state, closeSidenav());

    expect(state.isOpen).toEqual(false);
  });
});
