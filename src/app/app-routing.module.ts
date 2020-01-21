import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './shell/components/welcome';


const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'routing',
    loadChildren: () => import('./routing/routing.module').then(mod => mod.RoutingModule)
  },
  {
    path: '**',
    redirectTo: '/welcome',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
