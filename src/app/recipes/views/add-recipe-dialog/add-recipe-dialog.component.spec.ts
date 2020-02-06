import {FakeDialogRef, renderFeatureComponent} from '../../../../testing';
import {AddRecipeDialogComponent} from './add-recipe-dialog.component';
import {RecipesModule} from '../../recipes.module';
import {MatDialogRef} from '@angular/material';

describe('AddRecipeDialogComponent', () => {
  it('should close dialog with recipe data when submitted', async () => {
    const {getByTestId, type, getService} = await renderFeatureComponent(AddRecipeDialogComponent, RecipesModule);
    const dialogRef: FakeDialogRef<any> = getService(MatDialogRef);

    type(getByTestId('recipe-name'), 'French Toast');
    getByTestId('submit-recipe').click();

    expect(dialogRef.result).toEqual({
      name: 'French Toast'
    });
  });
});
