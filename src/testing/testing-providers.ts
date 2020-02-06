import {Action, Store} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {createState} from './create-state';
import {ActivatedRoute} from '@angular/router';
import {FakeActivatedRoute} from './fake-activated-route';
import {FakeStore} from './fake-store';
import {provideMockActions} from '@ngrx/effects/testing';
import {Subject} from 'rxjs';
import {MatDialogRef} from '@angular/material';
import {FakeDialogRef} from './fake-dialog-ref';

export function getTestingProviders(...actions: Action[]) {
  const state = createState(...actions);
  const actions$ = new Subject<Action>();
  const providers = [
    provideMockStore({initialState: state}),
    provideMockActions(() => actions$.asObservable()),
    {provide: Store, useClass: FakeStore},
    {provide: ActivatedRoute, useClass: FakeActivatedRoute},
    {provide: MatDialogRef, useClass: FakeDialogRef}
  ];
  return { actions$, providers };
}
