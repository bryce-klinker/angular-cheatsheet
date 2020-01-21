import {renderFeatureComponent, renderRootComponent} from '../../../../testing';
import {RecipesLayoutComponent} from './recipes-layout.component';
import {RecipesModule} from '../../recipes.module';

describe('RecipesLayoutComponent', () => {
  it('should have router outlet', async () => {
    const { queryAllByTestId } = await setup();

    expect(queryAllByTestId('recipes-router-outlet').length).toEqual(1);
  });

  it('should show recipes list', async () => {
    const { queryAllByTestId } = await setup();

    expect(queryAllByTestId('recipes-list').length).toEqual(1);
  });

  function setup() {
    return renderFeatureComponent(RecipesLayoutComponent, RecipesModule);
  }
});
