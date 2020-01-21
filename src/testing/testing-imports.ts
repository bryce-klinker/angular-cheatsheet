import {RouterTestingModule} from '@angular/router/testing';
import {Routes} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SharedModule} from '../app/shared/shared.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {combineAllReducers} from './create-state';

export interface TestingImportsOptions {
  routes?: Routes;
}

export function getRootTestingImports({routes = []}: TestingImportsOptions = {}) {
  return [
    RouterTestingModule.withRoutes(routes),
    HttpClientTestingModule,
    SharedModule,
    NoopAnimationsModule,
  ];
}

export function getFeatureTestingImports(module, {routes = []}: TestingImportsOptions = {}) {
  return [
    RouterTestingModule.withRoutes(routes),
    HttpClientTestingModule,
    SharedModule,
    NoopAnimationsModule,
    StoreModule.forRoot(combineAllReducers()),
    EffectsModule.forRoot([]),
    module
  ];
}
