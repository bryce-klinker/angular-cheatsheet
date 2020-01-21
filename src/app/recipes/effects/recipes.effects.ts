import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap} from 'rxjs/operators';
import {RecipeModel} from '../models';
import {loadAllRecipesRequest, loadAllRecipesSuccess} from '../actions';

@Injectable()
export class RecipesEffects {
  loadRecipes$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllRecipesRequest),
    mergeMap(() => this.httpClient.get<RecipeModel[]>('https://somewhere.com/recipes').pipe(
     map(recipes => loadAllRecipesSuccess({ recipes }))
    ))
  ));

  constructor(private actions$: Actions, private httpClient: HttpClient) {
  }
}
