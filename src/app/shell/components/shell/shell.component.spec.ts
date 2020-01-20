import {ShellComponent} from './shell.component';
import {renderComponent} from '../../../../testing';

describe('ShellComponent', () => {
  it('should show side navigation', async () => {
    const {queryAllByTestId} = await renderComponent(ShellComponent);

    expect(queryAllByTestId('sidenav-content').length).toEqual(1);
  });

  it('should have link to routing cheat sheet', async () => {
    const { getByTestId } = await renderComponent(ShellComponent);

    expect(getByTestId('routing-link').textContent).toContain('Routing');
  });
});
