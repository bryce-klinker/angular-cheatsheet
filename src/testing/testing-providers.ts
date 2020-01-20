import {Action, Store} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {createState} from './create-state';
import {ActivatedRoute} from '@angular/router';
import {FakeActivatedRoute} from './fake-activated-route';
import {FakeStore} from './fake-store';

export function getTestingProviders(...actions: Action[]) {
  const state = createState(...actions);
  return [
    provideMockStore({ initialState: state }),
    { provide: Store, useClass: FakeStore },
    { provide: ActivatedRoute, useClass: FakeActivatedRoute }
  ];
}
