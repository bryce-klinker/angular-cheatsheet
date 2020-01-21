import {Type} from '@angular/core';
import {Subject} from 'rxjs';
import {Action} from '@ngrx/store';
import {TestBed} from '@angular/core/testing';
import {getTestingImports} from './testing-imports';
import {getTestingProviders} from './testing-providers';
import {provideMockActions} from '@ngrx/effects/testing';

interface TestingEffectsOptions {
  actions?: Action[];
  providers?: [];
}

interface TestingEffectsResult<T> {
  effects: T;
  actions$: Subject<Action>;
}

export function createTestingEffect<T>(
  effects: Type<T>,
  {actions = [], providers = []}: TestingEffectsOptions = {}
): TestingEffectsResult<T> {
  const actions$ = new Subject<Action>();

  TestBed.configureTestingModule({
    imports: [
      ...getTestingImports()
    ],
    providers: [
      ...getTestingProviders(),
      ...providers,
      provideMockActions(actions$.asObservable()),
      effects
    ]
  });
  return { effects: TestBed.get(effects), actions$ };
}
