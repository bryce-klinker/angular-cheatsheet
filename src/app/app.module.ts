import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SHELL_BOOTSTRAP_COMPONENTS, SHELL_COMPONENTS} from './shell/components';
import {SharedModule} from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import {SettingsModel} from './shared/settings/settings.model';
import {SETTINGS_TOKEN} from './shared/settings';

export function createAppModuleClass(settings: SettingsModel) {
  @NgModule({
    declarations: [
      ...SHELL_COMPONENTS
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      SharedModule,
      StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
      StoreRouterConnectingModule.forRoot(),
      EffectsModule.forRoot([])
    ],
    providers: [
      { provide: SETTINGS_TOKEN, useValue: settings }
    ],
    bootstrap: [...SHELL_BOOTSTRAP_COMPONENTS]
  })
  class AppModule { }

  return AppModule;
}
