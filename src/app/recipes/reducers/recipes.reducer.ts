import {createReducer, on, createFeatureSelector, createSelector} from '@ngrx/store';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {RecipeModel} from '../models';
import {loadAllRecipesSuccess} from '../actions';

export const RECIPES_FEATURE_KEY = 'recipes';

export interface RecipesState extends EntityState<RecipeModel> {
}

const adapter = createEntityAdapter<RecipeModel>();

const initialState: RecipesState = adapter.getInitialState();

export const recipesReducer = createReducer(
  initialState,
  on(loadAllRecipesSuccess, (state, {recipes}) => adapter.addMany(recipes, state))
);

const { selectAll } = adapter.getSelectors();

const selectRecipesState = createFeatureSelector<RecipesState>(RECIPES_FEATURE_KEY);
export const selectAllRecipes = createSelector(
  selectRecipesState,
  selectAll
);


