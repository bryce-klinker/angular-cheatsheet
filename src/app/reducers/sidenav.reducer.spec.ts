import {testingInit} from '../../testing';
import {sidenavReducer} from './sidenav.reducer';
import {toggleSidenav} from '../actions';

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
});
