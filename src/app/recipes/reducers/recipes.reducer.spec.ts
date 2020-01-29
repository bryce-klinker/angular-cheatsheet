import {recipesReducer, selectAllRecipes} from './recipes.reducer';
import {loadAllRecipesSuccess, recipeSelected} from '../actions';

describe('recipesReducer', () => {
  it('should keep recipes in a dictionary by id', () => {
    const recipes = [{id: 3, name: 'jack'}];
    const state = recipesReducer(undefined, loadAllRecipesSuccess({recipes}));

    expect(state.entities[3]).toEqual(recipes[0]);
  });

  it('should have selected recipe id', () => {
    const state = recipesReducer(undefined, recipeSelected({id: 6}));

    expect(state.selectedRecipeId).toEqual(6);
  })
});
