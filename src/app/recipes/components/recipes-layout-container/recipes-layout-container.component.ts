import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {RecipeModel} from '../../models';
import {AppState} from '../../../app.state';
import {Store} from '@ngrx/store';
import {selectAllRecipes, selectSelectedRecipeId} from '../../reducers/recipes.reducer';

@Component({
  selector: 'app-recipes-layout-container',
  templateUrl: './recipes-layout-container.component.html',
  styleUrls: ['./recipes-layout-container.component.scss']
})
export class RecipesLayoutContainerComponent {
  recipes$: Observable<RecipeModel[]>;
  selectedRecipeId$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.recipes$ = store.select(selectAllRecipes);
    this.selectedRecipeId$ = store.select(selectSelectedRecipeId);
  }
}
