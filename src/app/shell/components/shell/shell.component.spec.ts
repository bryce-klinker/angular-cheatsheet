import {ShellComponent} from './shell.component';
import {renderComponent, FakeStore} from '../../../../testing';
import {TestBed} from '@angular/core/testing';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {toggleSidenav} from '../../../actions';

describe('ShellComponent', () => {
  it('should show side navigation', async () => {
    const {queryAllByTestId} = await renderComponent(ShellComponent);

    expect(queryAllByTestId('sidenav-content').length).toEqual(1);
  });

  it('should trigger sidenav open', async () => {
    const { getByTestId } = await renderComponent(ShellComponent);
    const store: FakeStore<AppState> = TestBed.get(Store);

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
});
