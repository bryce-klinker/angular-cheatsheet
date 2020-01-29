import {ShellComponent} from './shell.component';
import {renderRootComponent} from '../../../../testing';
import {closeSidenav, toggleSidenav} from '../../../actions';
import {By} from '@angular/platform-browser';

describe('ShellComponent', () => {
  it('should trigger sidenav open', async () => {
    const {getByTestId, store} = await renderRootComponent(ShellComponent);

    getByTestId('sidenav-toggle').click();

    expect(store.getActions()).toContain(toggleSidenav());
  });

  it('should have link to routing cheat sheet', async () => {
    const {getByTestId} = await renderRootComponent(ShellComponent);

    expect(getByTestId('routing-link').textContent).toContain('Routing');
  });

  it('should have link to recipes', async () => {
    const {getByTestId} = await renderRootComponent(ShellComponent);

    expect(getByTestId('recipes-link').textContent).toContain('Recipes');
  });

  it('should have an open sidenav', async () => {
    const {getByTestId} = await renderRootComponent(ShellComponent, {actions: [toggleSidenav()]});

    const sidenav = getByTestId('sidenav-content');
    expect(sidenav.style.visibility).toEqual('visible');
  });

  it('should trigger close sidenav when sidenav closes', async () => {
    const {store, fixture} = await renderRootComponent(ShellComponent, {actions: [toggleSidenav()]});

    fixture.debugElement.query(By.css('[data-testid="sidenav-content"]')).triggerEventHandler('closed', {});

    expect(store.getActions()).toContain(closeSidenav());
  });

  it('should have loading', async () => {
    const {queryAllByTestId} = await renderRootComponent(ShellComponent);

    expect(queryAllByTestId('loading').length).toEqual(1);
  });
});
