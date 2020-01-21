import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {RECIPES_EFFECTS} from './effects';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {RECIPES_FEATURE_KEY, recipesReducer} from './reducers/recipes.reducer';
import {RECIPES_COMPONENTS} from './components';


@NgModule({
  declarations: [
    ...RECIPES_COMPONENTS
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    StoreModule.forFeature(RECIPES_FEATURE_KEY, recipesReducer),
    EffectsModule.forFeature(RECIPES_EFFECTS)
  ]
})
export class RecipesModule { }
