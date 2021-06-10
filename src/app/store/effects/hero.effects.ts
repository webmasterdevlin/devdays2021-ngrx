import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HeroService } from "../services";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import * as heroActions from "../actions/hero.actions";

@Injectable()
export class HeroEffects {
  constructor(private actions$: Actions, private heroService: HeroService) {}

  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroActions.loadHeroes),
      mergeMap(() =>
        this.heroService.getHeroes().pipe(
          map((heroes) =>
            heroActions.loadHeroesSuccess({
              heroes,
            })
          ),
          catchError((error) => of(heroActions.loadHeroesFail({ error })))
        )
      )
    )
  );
}
