import {RouterTestingModule} from '@angular/router/testing';
import {Routes} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SharedModule} from '../app/shared/shared.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

export interface TestingImportsOptions {
  routes?: Routes;
}
export function getTestingImports({routes = [] }: TestingImportsOptions = {}) {
  return [
    RouterTestingModule.withRoutes(routes),
    HttpClientTestingModule,
    SharedModule,
    NoopAnimationsModule
  ];
}
