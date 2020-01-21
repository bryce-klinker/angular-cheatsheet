import {ActivatedRoute} from '@angular/router';
import {FakeActivatedRoute, renderFeatureComponent} from '../../../../testing';
import {TestingActiveRouteComponent} from './testing-active-route.component';
import {RoutingModule} from '../../routing.module';

describe('TestingActiveRouteComponent', () => {
  it('should show active route', async () => {
    const { getByTestId } = await setup();

    expect(getByTestId('main').textContent).toContain('hello');
  });

  it('should show value in route in text', async () => {
    const component = await setup();
    const activatedRoute: FakeActivatedRoute = component.getService(ActivatedRoute);

    activatedRoute.changeParamMap({ id: '123' });
    component.detectChanges();

    expect(component.getByTestId('id').textContent).toContain('123');
  });

  function setup() {
    return renderFeatureComponent(TestingActiveRouteComponent, RoutingModule);
  }
});
