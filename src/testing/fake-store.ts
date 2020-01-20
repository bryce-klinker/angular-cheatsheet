import {MockStore} from '@ngrx/store/testing';
import {Action} from '@ngrx/store';

export class FakeStore<TState> extends MockStore<TState> {
  private actions: Action[] = [];

  getActions(): Action[] {
    return this.actions;
  }

  dispatch<V extends Action>(action: V): void {
    this.actions.push(action);
  }
}
