import {InjectFlags, InjectionToken, Type} from '@angular/core';
import {render as testingRender} from '@testing-library/angular';
import {getFeatureTestingImports, getRootTestingImports} from './testing-imports';
import {Action, Store} from '@ngrx/store';
import {getTestingProviders} from './testing-providers';
import {RenderResult} from '@testing-library/angular/lib/models';
import {FakeStore} from './fake-store';
import {AppState} from '../app/app.state';
import {TestBed} from '@angular/core/testing';
import {AppModule} from '../app/app.module';
import {SHELL_COMPONENTS} from '../app/shell/components';

interface RenderOptions {
  actions?: Action[];
  providers?: [];
  module?: any;
}

interface RenderResultWithStore<ComponentType> extends RenderResult<ComponentType, ComponentType> {
  store: FakeStore<AppState>;
  getService: <T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags) => any;
}

export async function renderRootComponent<T>(
  component: Type<T>,
  {actions = [], providers = []}: RenderOptions = {}
): Promise<RenderResultWithStore<T>> {
  const {providers: testingProviders} = getTestingProviders(...actions);
  const result = await testingRender(component, {
    excludeComponentDeclaration: true,
    imports: getRootTestingImports(),
    providers: [
      ...testingProviders,
      ...providers
    ],
    declarations: [
      ...SHELL_COMPONENTS
    ]
  });

  const store = TestBed.get(Store);
  return {...result, store, getService: TestBed.get };
}

export async function renderFeatureComponent<T>(
  component: Type<T>,
  module: any,
  {actions = [], providers = []}: RenderOptions = {},
): Promise<RenderResultWithStore<T>> {
  const {providers: testingProviders} = getTestingProviders(...actions);
  const result = await testingRender(component, {
    excludeComponentDeclaration: true,
    imports: getFeatureTestingImports(module),
    providers: [
      ...testingProviders,
      ...providers
    ]
  });

  const store = TestBed.get(Store);
  return {...result, store, getService: TestBed.get };
}
