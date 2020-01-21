import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {AppState} from '../../../app.state';
import {Store} from '@ngrx/store';
import {selectIsLoading} from '../../../reducers';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnDestroy, OnInit {
  private subscription: Subscription;

  indicatorClass$: Observable<string>;
  @HostBinding('class') indicatorClass: string;

  constructor(private store: Store<AppState>) {
    this.indicatorClass$ = store.select(selectIsLoading)
      .pipe(
        map(isLoading => isLoading ? 'show' : 'collapse')
      );
  }

  ngOnInit(): void {
    this.subscription = this.indicatorClass$.subscribe(cssClass => this.indicatorClass = cssClass);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
