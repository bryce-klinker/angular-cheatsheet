import {createAction, props} from '@ngrx/store';
import {RecipeModel} from '../models';

export const RECIPES_ACTION_TYPES = {
  LOAD_ALL_REQUEST: '[Recipes] Load All Recipes Request',
  LOAD_ALL_SUCCESS: '[Recipes] Load All Recipes Success',
  LOAD_ALL_FAILED: '[Recipes] Load All Recipes Failed',
  RECIPE_SELECTED: '[Recipes] Recipe Selected',
};

export const loadAllRecipesRequest = createAction(RECIPES_ACTION_TYPES.LOAD_ALL_REQUEST);
export const loadAllRecipesSuccess = createAction(
  RECIPES_ACTION_TYPES.LOAD_ALL_SUCCESS,
  props<{ recipes: RecipeModel[] }>()
);
export const loadAllRecipesFailed = createAction(
  RECIPES_ACTION_TYPES.LOAD_ALL_FAILED,
  props<{ error: any }>()
);
export const recipeSelected = createAction(
  RECIPES_ACTION_TYPES.RECIPE_SELECTED,
  props<{ id: number }>()
);
