import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesLayoutContainerComponent} from './components/recipes-layout-container';

const routes: Routes = [
  {
    path: '', component: RecipesLayoutContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
