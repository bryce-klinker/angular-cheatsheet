import {renderRootComponent} from '../../../../testing';
import {LoadingComponent} from './loading.component';
import {loadAllRecipesRequest} from '../../../recipes/actions';

describe('LoadingComponent', () => {
  it('should hide loading indicator when nothing is being loaded', async () => {
    const { getByTestId, container } = await renderRootComponent(LoadingComponent);

    expect(container.classList).toContain('collapse');
    expect(getByTestId('loading-indicator').classList).toContain('collapse');
  });

  it('should show loading indicator when loading', async () => {
    const { getByTestId, container } = await renderRootComponent(LoadingComponent, {actions: [loadAllRecipesRequest()]});

    expect(container.classList).toContain('show');
    expect(getByTestId('loading-indicator').classList).toContain('show');
  });
});
