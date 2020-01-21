import {Component} from '@angular/core';
import {RecipeModel} from '../../models';
import {Observable} from 'rxjs';
import {AppState} from '../../../app.state';
import {Store} from '@ngrx/store';
import {selectAllRecipes} from '../../reducers/recipes.reducer';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  recipes$: Observable<RecipeModel[]>;

  constructor(private store: Store<AppState>) {
    this.recipes$ = store.select(selectAllRecipes);
  }
}
