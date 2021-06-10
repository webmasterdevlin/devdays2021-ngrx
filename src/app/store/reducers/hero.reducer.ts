import { createReducer, on } from "@ngrx/store";
import * as HeroActions from "../actions/hero.actions";
import { Hero } from "src/app/features/hero/hero.model";

export interface HeroState {
  heroes: Hero[];
  hero: Hero;
  isLoading: boolean;
  error: string;
}

export const initialState: HeroState = {
  heroes: [],
  hero: {} as Hero,
  isLoading: false,
  error: "",
};

export const heroReducer = createReducer(
  initialState,

  // loads the list of heroes
  on(HeroActions.loadHeroes, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(HeroActions.loadHeroesSuccess, (state, { heroes }) => ({
    ...state,
    heroes,
    isLoading: false,
  })),
  on(HeroActions.loadHeroesFail, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);
