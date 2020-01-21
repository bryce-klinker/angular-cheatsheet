import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import {ROUTING_COMPONENTS} from './components';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ...ROUTING_COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule { }
