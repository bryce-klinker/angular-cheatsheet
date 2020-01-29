import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {SpyingRoutingModule} from './spying-routing.module';
import {SPYING_COMPONENTS} from './components';

@NgModule({
  imports: [
    SharedModule,
    SpyingRoutingModule,
  ],
  declarations: [
    ...SPYING_COMPONENTS,
  ],
  providers: [

  ]
})
export class SpyingModule {

}
