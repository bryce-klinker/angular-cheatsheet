import {Type} from '@angular/core';
import {Subject} from 'rxjs';
import {Action} from '@ngrx/store';
import {TestBed} from '@angular/core/testing';
import {getRootTestingImports} from './testing-imports';
import {getTestingProviders} from './testing-providers';

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
  const { providers: testingProviders, actions$ } = getTestingProviders();
  TestBed.configureTestingModule({
    imports: [
      ...getRootTestingImports()
    ],
    providers: [
      ...testingProviders,
      ...providers,
      effects
    ]
  });
  return { effects: TestBed.get(effects), actions$ };
}
