import {ShellComponent} from './shell.component';
import {renderComponent} from '../../../../testing';
import {closeSidenav, toggleSidenav} from '../../../actions';
import {By} from '@angular/platform-browser';

describe('ShellComponent', () => {
  it('should trigger sidenav open', async () => {
    const { getByTestId, store } = await renderComponent(ShellComponent);

    getByTestId('sidenav-toggle').click();

    expect(store.getActions()).toContain(toggleSidenav());
  });

  it('should have link to routing cheat sheet', async () => {
    const { getByTestId } = await renderComponent(ShellComponent);

    expect(getByTestId('routing-link').textContent).toContain('Routing');
  });

  it('should have an open sidenav', async () => {
    const {getByTestId} = await renderComponent(ShellComponent, { actions: [toggleSidenav()] });

    expect(getByTestId('sidenav-content').style.visibility).toEqual('visible');
  });

  it('should trigger close sidenav when sidenav closes', async () => {
    const {store, fixture} = await renderComponent(ShellComponent, { actions: [toggleSidenav()] });

    fixture.debugElement.query(By.css('[data-testid="sidenav-content"]')).triggerEventHandler('closed', {});

    expect(store.getActions()).toContain(closeSidenav());
  });
});
