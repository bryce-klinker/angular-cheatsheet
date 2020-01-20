import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestingActiveRouteComponent} from './components/testing-active-route';


const routes: Routes = [
  {
    path: 'testing-activated-route/:id',
    component: TestingActiveRouteComponent
  },
  {
    path: '**',
    redirectTo: '/routing/testing-activated-route/123'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
