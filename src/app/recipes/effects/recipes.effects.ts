import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {RecipeModel} from '../models';
import {loadAllRecipesFailed, loadAllRecipesRequest, loadAllRecipesSuccess} from '../actions';
import {of} from 'rxjs';

@Injectable()
export class RecipesEffects {
  loadRecipes$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllRecipesRequest),
    mergeMap(() => this.httpClient.get<RecipeModel[]>('https://somewhere.com/recipes').pipe(
      map(recipes => loadAllRecipesSuccess({recipes})),
      catchError((err: HttpErrorResponse) => of(loadAllRecipesFailed({error: err.statusText})))
    ))
  ));

  constructor(private actions$: Actions, private httpClient: HttpClient) {
  }
}
