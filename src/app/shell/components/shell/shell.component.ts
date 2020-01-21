import { Component } from '@angular/core';
import {AppState} from '../../../app.state';
import {Store} from '@ngrx/store';
import {closeSidenav, toggleSidenav} from '../../../actions';
import {Observable} from 'rxjs';
import {selectIsSidenavOpen} from '../../../reducers';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  isSidenavOpen$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isSidenavOpen$ = store.select(selectIsSidenavOpen);
  }

  toggleSidenav() {
    this.store.dispatch(toggleSidenav());
  }

  closeSidenav() {
    this.store.dispatch(closeSidenav());
  }
}
