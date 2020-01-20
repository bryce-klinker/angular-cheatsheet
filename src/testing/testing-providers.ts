import {Action} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {createState} from './create-state';
import {ActivatedRoute} from '@angular/router';
import {FakeActivatedRoute} from './fake-activated-route';

export function getTestingProviders(...actions: Action[]) {
  const state = createState(...actions);
  return [
    provideMockStore({ initialState: state }),
    { provide: ActivatedRoute, useClass: FakeActivatedRoute }
  ];
}
