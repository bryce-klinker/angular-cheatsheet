import {renderFeatureComponent} from '../../../../testing';
import {RecipesListComponent} from './recipes-list.component';
import {RecipesModule} from '../../recipes.module';

describe('RecipesListComponent', () => {
  it('should show all recipes', async () => {
    const recipes = [{id: 4, name: 'four'}, {id: 5, name: 'five'}, {id: 6, name: 'six'}];
    const {queryAllByTestId} = await setup({recipes});

    expect(queryAllByTestId('recipe-list-item').length).toEqual(3);
  });

  it('should mark selected recipe as selected', async () => {
    const recipes = [{id: 4, name: 'four'}, {id: 5, name: 'five'}, {id: 6, name: 'six'}];
    const {container} = await setup({recipes, selectedRecipeId: 5});

    expect(container.querySelectorAll('.selected').length).toEqual(1);
  });

  it('should notify when recipe is selected', async () => {
    const recipes = [{id: 4, name: 'four'}];
    const itemSelectedHandler = jasmine.createSpy();
    const {getByTestId} = await setup({recipes, recipeSelected: {emit: itemSelectedHandler}});

    getByTestId('recipe-list-item').click();

    expect(itemSelectedHandler).toHaveBeenCalledWith(recipes[0]);
  });

  function setup(properties = {}) {
    return renderFeatureComponent(RecipesListComponent, RecipesModule, {properties});
  }
});
