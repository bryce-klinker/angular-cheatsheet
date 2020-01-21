import {ActivatedRoute} from '@angular/router';
import {renderComponent, FakeActivatedRoute} from '../../../../testing';
import {TestingActiveRouteComponent} from './testing-active-route.component';

describe('TestingActiveRouteComponent', () => {
  it('should show active route', async () => {
    const { getByTestId } = await renderComponent(TestingActiveRouteComponent);

    expect(getByTestId('main').textContent).toContain('hello');
  });

  it('should show value in route in text', async () => {
    const component = await renderComponent(TestingActiveRouteComponent);
    const activatedRoute: FakeActivatedRoute = component.getService(ActivatedRoute);

    activatedRoute.changeParamMap({ id: '123' });
    component.detectChanges();

    expect(component.getByTestId('id').textContent).toContain('123');
  });
});
