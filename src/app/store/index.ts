import { ActionReducerMap } from "@ngrx/store";
import { heroReducer, HeroState } from "./reducers/hero.reducer";

export interface State {
  heroes: HeroState;
  // new reducerState
}

export const reducers: ActionReducerMap<State> = {
  heroes: heroReducer,
  // new reducer
};
