import {loadingReducer} from './loading.reducer';
import {loadAllRecipesFailed, loadAllRecipesRequest, loadAllRecipesSuccess} from '../recipes/actions';

describe('loadingReducer', () => {
  it('should be loading recipes', () => {
    const state = loadingReducer(undefined, loadAllRecipesRequest());

    expect(state['[Recipes] Load All Recipes']).toEqual(true);
  });

  it('should be finished loading recipes when recipes are loaded successfully', () => {
    let state = loadingReducer(undefined, loadAllRecipesRequest());
    state = loadingReducer(state, loadAllRecipesSuccess({recipes: []}));

    expect(state['[Recipes] Load All Recipes']).toEqual(false);
  });

  it('should be finished loading when recipes fail to load', () => {
    let state = loadingReducer(undefined, loadAllRecipesRequest());
    state = loadingReducer(state, loadAllRecipesFailed({error: 'idk'}));

    expect(state['[Recipes] Load All Recipes']).toEqual(false);
  });
});
