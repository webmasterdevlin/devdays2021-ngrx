import { createAction, props } from "@ngrx/store";
import { Hero } from "../../features/hero/hero.model";

export const loadHeroes = createAction("[Hero] loadHeroes");

export const loadHeroesSuccess = createAction(
  "[Hero] loadHeroesSuccess",
  props<{ heroes: Hero[] }>()
);

export const loadHeroesFail = createAction(
  "[Hero] loadHeroesFail",
  props<{ error: string }>()
);
