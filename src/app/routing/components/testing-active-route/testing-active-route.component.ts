import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-testing-active-route',
  templateUrl: './testing-active-route.component.html',
  styleUrls: ['./testing-active-route.component.scss']
})
export class TestingActiveRouteComponent {

  activeId$: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activeId$ = activatedRoute.paramMap.pipe(
      map(params => params.get('id'))
    );
  }
}
