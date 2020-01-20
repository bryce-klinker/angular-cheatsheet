import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'routing',
    loadChildren: () => import('./routing/routing.module').then(mod => mod.RoutingModule)
  },
  {
    path: '**',
    redirectTo: '/routing',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
