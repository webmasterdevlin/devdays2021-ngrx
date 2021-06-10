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

export const deleteHero = createAction(
  "[Hero] deleteHero",
  props<{ id: string }>()
);

export const deleteHeroSuccess = createAction(
  "[Hero] deleteHeroSucess",
  props<{ id: string }>()
);

export const deleteHeroFail = createAction(
  "[Hero] deleteHeroSucess",
  props<{ error: string }>()
);
