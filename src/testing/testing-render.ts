import {Type} from '@angular/core';
import { render as testingRender } from '@testing-library/angular';
import {getTestingImports} from './testing-imports';
import {Action} from '@ngrx/store';
import {getTestingProviders} from './testing-providers';

interface RenderOptions {
  actions?: Action[];
  providers?: [];
}

export function renderComponent<T>(component: Type<T>, { actions= [], providers = []}: RenderOptions = {}) {
  const defaultProviders = getTestingProviders(...actions);
  return testingRender(component, {
    imports: getTestingImports(),
    providers: [
      ...defaultProviders,
      ...providers
    ]
  });
}
