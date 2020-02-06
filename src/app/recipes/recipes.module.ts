import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {RECIPES_EFFECTS} from './effects';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {RECIPES_FEATURE_KEY, recipesReducer} from './reducers/recipes.reducer';
import {RECIPES_CONTAINERS} from './containers';
import {RECIPES_ENTRY_COMPONENTS, RECIPES_VIEWS} from './views';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ...RECIPES_CONTAINERS,
    ...RECIPES_VIEWS
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    StoreModule.forFeature(RECIPES_FEATURE_KEY, recipesReducer),
    EffectsModule.forFeature(RECIPES_EFFECTS),
    ReactiveFormsModule
  ],
  entryComponents: [
    RECIPES_ENTRY_COMPONENTS
  ]
})
export class RecipesModule {
}
