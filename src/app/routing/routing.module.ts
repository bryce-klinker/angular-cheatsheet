import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import {ROUTING_COMPONENTS} from './components';


@NgModule({
  declarations: [
    ...ROUTING_COMPONENTS
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule { }
