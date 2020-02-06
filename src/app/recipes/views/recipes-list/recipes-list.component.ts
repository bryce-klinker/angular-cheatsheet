import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeModel} from '../../models';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  @Input() recipes: RecipeModel[];

  @Input() selectedRecipeId: number;

  @Output() recipeSelected = new EventEmitter();
}
