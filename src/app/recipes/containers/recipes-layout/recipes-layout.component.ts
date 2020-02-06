import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {RecipeModel} from '../../models';
import {AppState} from '../../../app.state';
import {Store} from '@ngrx/store';
import {selectAllRecipes, selectSelectedRecipeId} from '../../reducers/recipes.reducer';
import {loadAllRecipesRequest} from '../../actions';

@Component({
  selector: 'app-recipes-layout-container',
  templateUrl: './recipes-layout.component.html',
  styleUrls: ['./recipes-layout.component.scss']
})
export class RecipesLayoutComponent implements OnInit {
  recipes$: Observable<RecipeModel[]>;
  selectedRecipeId$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.recipes$ = store.select(selectAllRecipes);
    this.selectedRecipeId$ = store.select(selectSelectedRecipeId);
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllRecipesRequest());
  }
}
