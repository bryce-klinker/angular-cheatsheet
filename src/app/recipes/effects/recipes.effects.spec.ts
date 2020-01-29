import {Action} from '@ngrx/store';
import {Subject} from 'rxjs';
import {createTestingEffect} from '../../../testing/testing-effects';
import {RecipesEffects} from './recipes.effects';
import {HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {loadAllRecipesFailed, loadAllRecipesRequest, loadAllRecipesSuccess} from '../actions';

describe('RecipesEffects', () => {
  let actions$: Subject<Action>;
  let effects: RecipesEffects;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    const result = createTestingEffect(RecipesEffects);
    actions$ = result.actions$;
    effects = result.effects;

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should notify that recipes were loaded successfully', done => {
    const expected = [{id: 1, name: 'one'}, {id: 2, name: 'two'}, {id: 3, name: 'three'}];

    effects.loadRecipes$.subscribe((action: ReturnType<typeof loadAllRecipesSuccess>) => {
      expect(action.recipes).toEqual(expected);
      done();
    });
    actions$.next(loadAllRecipesRequest());

    httpTestingController.expectOne('/recipes')
      .flush(expected);
  });

  it('should notify that recipes failed to load', done => {
    effects.loadRecipes$.subscribe((action: ReturnType<typeof loadAllRecipesFailed>) => {
      expect(action.error).toEqual('This is bad');
      done();
    });
    actions$.next(loadAllRecipesRequest());

    httpTestingController.expectOne('/recipes')
      .error(new ErrorEvent(''), { statusText: 'This is bad' });
  });
});
