import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {SETTINGS_PROVIDERS} from './settings';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    SETTINGS_PROVIDERS
  ]
})
export class SharedModule {
}
