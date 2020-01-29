import {renderFeatureComponent, renderRootComponent} from '../../../../testing';
import {RecipesLayoutContainerComponent} from './recipes-layout-container.component';
import {RecipesModule} from '../../recipes.module';
import {Action} from '@ngrx/store';
import {loadAllRecipesRequest, loadAllRecipesSuccess, recipeSelected} from '../../actions';

describe('RecipesLayoutContainerComponent', () => {
  it('should have router outlet', async () => {
    const {queryAllByTestId} = await setup();

    expect(queryAllByTestId('recipes-router-outlet').length).toEqual(1);
  });

  it('should show recipes list', async () => {
    const {queryAllByTestId} = await setup();

    expect(queryAllByTestId('recipes-list').length).toEqual(1);
  });

  it('should show each recipe', async () => {
    const recipes = [{id: 1, name: 'bob'}, {id: 3, name: 'bob'}, {id: 2, name: 'bob'}];

    const {queryAllByTestId} = await setup(loadAllRecipesSuccess({recipes}));

    expect(queryAllByTestId('recipe-list-item').length).toEqual(3);
  });

  it('should have selected recipe', async () => {
    const recipes = [{id: 1, name: 'bob'}, {id: 3, name: 'bob'}, {id: 2, name: 'bob'}];

    const {container} = await setup(loadAllRecipesSuccess({recipes}), recipeSelected({id: 3}));

    expect(container.querySelectorAll('.selected').length).toEqual(1);
  });

  it('should dispatch load recipes action', async () => {
    const {store} = await setup();

    expect(store.getActions()).toContain(loadAllRecipesRequest());
  });

  function setup(...actions: Action[]) {
    return renderFeatureComponent(RecipesLayoutContainerComponent, RecipesModule, {actions});
  }
});
