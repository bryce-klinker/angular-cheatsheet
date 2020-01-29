import {renderFeatureComponent} from '../../../../testing';
import {SpyingModule} from '../../spying.module';
import {SpyingComponent} from './spying.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {of} from 'rxjs';
import SpyObj = jasmine.SpyObj;
import {OverlayRef} from '@angular/cdk/overlay';

describe('SpyingComponent', () =>  {
  it('should spy on correct method', async () => {
     const { getByTestId, getService } = await renderFeatureComponent(SpyingComponent, SpyingModule);
     const matDialog = getService(MatDialog);
     spyOn(matDialog, 'open').and.returnValue(of(true));

     getByTestId('open-dialog').click();

     expect(matDialog.open).toHaveBeenCalled();
  });

  it('should spy on method correctly two times', async () => {
    const { getByTestId, getService } = await renderFeatureComponent(SpyingComponent, SpyingModule);
    const matDialog = getService(MatDialog);
    const openSpy = spyOn(matDialog, 'open');
    openSpy.and.returnValue(true);
    openSpy.and.callFake(() => console.log('MULTIPLE SPIES'));

    getByTestId('open-dialog').click();

    expect(matDialog.open).toHaveBeenCalled();
  });
});
