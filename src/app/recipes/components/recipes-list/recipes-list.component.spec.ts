import {renderFeatureComponent, renderRootComponent} from '../../../../testing';
import {RecipesListComponent} from './recipes-list.component';
import {loadAllRecipesSuccess} from '../../actions';
import {RecipesModule} from '../../recipes.module';
import {Action} from '@ngrx/store';

describe('RecipesListComponent', () => {
  it('should show all recipes', async () => {
    const recipes = [{id: 4, name: 'four'}, {id: 5, name: 'five'}, {id: 6, name: 'six'}];
    const { queryAllByTestId } = await setup(loadAllRecipesSuccess({recipes}));

    expect(queryAllByTestId('recipe-list-item').length).toEqual(3);
  });

  function setup(...actions: Action[]) {
    return renderFeatureComponent(RecipesListComponent, RecipesModule, {actions});
  }
});
