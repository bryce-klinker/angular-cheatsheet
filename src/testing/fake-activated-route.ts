import {convertToParamMap, ParamMap, Params} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';

export class FakeActivatedRoute {
  private paramMapSubject: BehaviorSubject<ParamMap> = new BehaviorSubject<ParamMap>(convertToParamMap({}));
  readonly paramMap: Observable<ParamMap> = this.paramMapSubject.asObservable();

  constructor() {
    this.paramMap = this.paramMapSubject.asObservable();
  }

  changeParamMap(params: Params) {
    this.paramMapSubject.next(convertToParamMap(params));
  }
}
