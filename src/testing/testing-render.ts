import {InjectFlags, InjectionToken, Type} from '@angular/core';
import {render as testingRender} from '@testing-library/angular';
import {getTestingImports} from './testing-imports';
import {Action, Store} from '@ngrx/store';
import {getTestingProviders} from './testing-providers';
import {RenderResult} from '@testing-library/angular/lib/models';
import {FakeStore} from './fake-store';
import {AppState} from '../app/app.state';
import {TestBed} from '@angular/core/testing';

interface RenderOptions {
  actions?: Action[];
  providers?: [];
}

interface RenderResultWithStore<ComponentType> extends RenderResult<ComponentType, ComponentType> {
  store: FakeStore<AppState>;
  getService: <T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags) => any;
}

export async function renderComponent<T>(
  component: Type<T>,
  {actions = [], providers = []}: RenderOptions = {}
): Promise<RenderResultWithStore<T>> {
  const defaultProviders = getTestingProviders(...actions);
  const result = await testingRender(component, {
    imports: getTestingImports(),
    providers: [
      ...defaultProviders,
      ...providers
    ]
  });

  const store = TestBed.get(Store);
  return {...result, store, getService: TestBed.get };
}
