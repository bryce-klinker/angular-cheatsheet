import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesLayoutComponent} from './containers/recipes-layout';

const routes: Routes = [
  {
    path: '', component: RecipesLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
