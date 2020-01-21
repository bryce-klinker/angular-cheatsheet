import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {RECIPES_EFFECTS} from './effects';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {recipesReducer} from './reducers/recipes.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    StoreModule.forFeature('recipes', recipesReducer),
    EffectsModule.forFeature(RECIPES_EFFECTS)
  ]
})
export class RecipesModule { }
